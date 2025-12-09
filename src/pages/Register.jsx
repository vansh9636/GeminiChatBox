import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Constext } from '../context/Context'
import Login from './Login'
import { useContext } from 'react'


const Register = () => {
    const navigate = useNavigate()
    const [registerData, setregisterData] = useState({ username: "", useremail: "", userpass: "", id: 0 });

    function fromhandler(e) {
        e.preventDefault()
        const saveduser = JSON.parse(localStorage.getItem('users')) || [];
        saveduser.push({ ...registerData, id: saveduser.length, History: [] });
        localStorage.setItem("users", JSON.stringify(saveduser))
        setregisterData({ username: "", useremail: "", userpass: "" });
        alert("Register done ! ✅ ")
        navigate('/login')

    }
    function changehandler(e) {
        setregisterData({ ...registerData, [e.target.name]: e.target.value, })
    }

    return (
        <div id='Login'>
            <div className='LoginPanal'>
                <div className="leftlog">
                    <img src="src/assets/download-removebg-preview.png" alt="logo" />
                    <h1>Sign up</h1>
                    <p>with your Google Account. This account will be acailabe to other Google apps in the browser. </p>
                </div>
                <div className='rightlog rightup'>
                    <form onSubmit={fromhandler} action="" method="post">
                        <div className='inputfilds'>
                            <input
                                onChange={changehandler}
                                value={registerData.username}
                                name='username'
                                type='text'
                                placeholder='Your Name'
                                maxLength={20}
                                minLength={3}
                                required />

                            <input onChange={changehandler}
                                value={registerData.useremail}
                                name='useremail'
                                type='email'
                                placeholder='Enter Email'
                                required />
                            <input onChange={changehandler}
                                value={registerData.userpass}
                                name='userpass'
                                type='password'
                                placeholder='password'
                                maxLength={10}
                                minLength={4}
                                required />
                        </div>
                        <p>Not your computer? Use Guest mode to sign in pricately. <span>Learn more about using Guest mode</span></p>
                        <div id='btns'>
                            <Link id='signup-log' to={'/login'}>Already have account</Link>
                            <button id='submitbtn' type="submit" >Next</button>
                        </div>
                    </form>
                    {/* <div className="h1">
                        {mamber.map((item, index) => {
                            return (
                              <li>{item.name}</li>
                            )
                        })}
          </div> */}
                </div>
            </div>
        </div>
    )
}

export default Register