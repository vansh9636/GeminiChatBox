import { React, useEffect, useState } from 'react'
import Register from './Register'
import { Link, useNavigate } from 'react-router-dom'
import { Constext } from '../context/Context'
import { useContext } from 'react'
const Login = () => {
  const navigate = useNavigate();
  const {setpreprompt} = useContext(Constext);
  const [loginData, setloginData] = useState({ loginEmail: "", loginPass: "" })

  function loginHandler(e) {
    e.preventDefault()
    checkUser();
  }
  function loginChangeHandler(e) {
    setloginData({ ...loginData, [e.target.name]: e.target.value })
  }

  function checkUser() {
    const savedUser = JSON.parse(localStorage.getItem("users")) || [];
    const Isfind = savedUser.find((item) => ((item.useremail == loginData.loginEmail) && (item.userpass == loginData.loginPass)));  
    if (Isfind) {
      localStorage.setItem('currentUser', JSON.stringify(Isfind));
      // setcurrentUser(JSON.parse(localStorage.getItem("currentUser")))
      (JSON.parse(localStorage.getItem('currentUser')))?setpreprompt([...JSON.parse(localStorage.getItem('currentUser')).History]):""
      alert("Login sucessfully ! ✅");
      navigate("/");
    }
    else {
      alert("user not found ! ⚠️")
    }
  }

  return (
    <div id='Login'>
      <div className='LoginPanal'>
        <div className="leftlog">
          <img src="src/assets/download-removebg-preview.png" alt="logo" />
          <h1>Sign in</h1>
          <p>with your Google Account. This account will be acailabe to other Google apps in the browser. </p>
        </div>
        <div className='rightlog'>
          <form onSubmit={loginHandler} method="">
            <div className='inputfilds'>
              <input
                type='email'
                value={loginData.loginEmail}
                onChange={loginChangeHandler}
                placeholder='Enter Email'
                name='loginEmail'
                required />
              <input
                type='password'
                value={loginData.loginPass}
                onChange={loginChangeHandler}
                placeholder='password'
                name='loginPass'
                required />
            </div>
            <button id='forgotpass'>Forgot password ?</button>
            <p>Not your computer? Use Guest mode to sign in pricately. <span>Learn more about using Guest mode</span></p>
            <div id='btns'>
              <Link id='signup-log' to={'/register'}> Create account</Link>
              <button id='submitbtn' type="submit">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
