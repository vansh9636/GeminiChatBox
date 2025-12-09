import { useContext, useEffect } from 'react';
import { Constext } from '../context/Context';

const Home = () => {
  const { onsent, Input, setInput, showResult, ResultData, showLoder,  currentInput, setisextend, setshowslider } = useContext(Constext);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    let button = document.getElementById("theme");
    button.addEventListener("click", () => {
      document.body.classList.toggle("light");
      if (document.body.getAttribute("class") == "body light") {
        button.innerHTML = "<i class='ri-moon-line'></i>";
      }
      else {
        button.innerHTML = "<i class='ri-sun-line'></i>";
      }
    })
  }, [])


  const showSlider = () => {
    setisextend(true)
    setshowslider(true)
  }

  return (
    <>
      <div className='home'>
        <div className="nav">
          <span>
            <h5 className='ot-devc' onClick={() => showSlider()}><i className="ri-menu-line"></i></h5>
            <h1>Gemini</h1></span>
          <h5 id='theme'><i className="ri-sun-line"></i></h5>
          <img src="src/assets/profileImg.jpeg" alt="profileImg" />
        </div>
        <div className="result-display">
          {!showResult ?
            <><div className="heading">
              <h2 id='userName'>
                Hello,{(currentUser) ? (currentUser.username).split(" ")[0].charAt(0).toUpperCase() + (currentUser.username).split(" ")[0].slice(1).toLowerCase() : "Guest"}
              </h2>

              <h2>How can i help you today ?</h2>
            </div>
            </> :
            <div className='result'>
              <div className="currentInput">
                <img src="src/assets/profileImg.jpeg" alt="user" />
                <span>{currentInput}</span>
              </div>
              <div className="result-inner">
                <img src="src/assets/download-removebg-preview.png" alt="" />
                <div className="pera">
                  {showLoder ?
                    <div className='loader'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div> : <p dangerouslySetInnerHTML={{ __html: ResultData }}></p>
                  }
                </div>
              </div>

            </div>

          }
        </div>
        <div className="home-bottom">
          {!showResult ? null : <span className="shadow">
          </span>}
          <div id='input-box'>
            <input type="text"
              value={Input}
              onChange={(e) => { setInput(e.target.value) }}
              placeholder={'Ask Something...'}
            />
            <span><i className="ri-image-ai-line"></i></span>
            {/* <span><i className="ri-mic-line"></i></span> */}
            {Input ? <span onClick={() => onsent()}><i className="ri-send-plane-fill"></i></span> : null}
          </div>
          <p>Gemini can make mistakes, so double-check it</p>
        </div>
      </div>

    </>
  )
}

export default Home