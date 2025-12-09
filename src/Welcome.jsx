import React from 'react'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <>
      <div id="welcome">
        <nav>
          <h1>Gemini</h1>
          <ul>
            <Link className='navlink' to={"/"} >Try Gemini Advanced</Link>
            <Link className='navlink' to={"/"}>For business</Link>
            <Link id='welBtn' to={"/register"}>Sign Up</Link>
          </ul>
        </nav>
        <div id="wel_main">
          <div className="wel_mainIn">
            <div className="wel_left">
              <h1>Gemini</h1>
              <h2>Supercharge your creativity and productivity</h2>
              <p>Chat to start writing, planning , learning and more with Google AI</p>
              <Link id='welBtn' to={"/login"}>Sign In</Link>
            </div>
            <img src="src/assets/futuristic-car-2.webp" alt="wel_png" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome