import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Constext } from '../context/Context'
import js from '@eslint/js'
const Sidebar = () => {
    const navigate = useNavigate();
    const { onsent, preprompt, newChat, deldata, setcurrentInput, isextend, setisextend, showslider, setshowslider, setpreprompt, currentUser } = useContext(Constext)
    const newpromt = async (prompt) => {
        setshowslider(false)
        setcurrentInput(prompt)
        // console.log(prompt, setcurrentInput(prompt))
        await onsent(prompt)
    }

    function closeslider() {
        setisextend(false)
        setshowslider(false)
    }
    function logOutUser() {
        if (confirm("Are you want to Log out")) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const updateUsersList = users.map((user) => (
                user.useremail == currentUser.useremail ? { ...user, History: preprompt } : user
            ))
            localStorage.setItem('users', JSON.stringify(updateUsersList));
            localStorage.removeItem('currentUser');
            newChat();
            setpreprompt([]);
            navigate('/login');
        }
        else {
            console.log("continue...")
        }
    }


    return (
        <>
            <div id="sidebar" className={showslider ? "slideropen" : "sliderclose"}>
                <div>
                    <h1 className='menubar' onClick={() => setisextend(!isextend)}><i className="ri-menu-line"></i></h1>
                    <h2 className='close' onClick={() => closeslider()}><i className="ri-close-line"></i></h2>
                    <div className='newchat' onClick={() => { newChat() }}>
                        <i className="ri-add-line"></i>
                        {isextend ? <span>New chat</span> : null}
                    </div>
                </div>
                {isextend ? <div className="recent">
                    <h1><span>Recent</span>{(preprompt.length !== 0) ? <i className="ri-delete-bin-6-line" onClick={() => deldata()}></i> : null}</h1>
                    <div className='recet-inner'>
                        {preprompt.map((item, index) => {
                            return (<div className='pre-prompt' key={index} onClick={() => { newpromt(item) }}>
                                <i className="ri-chat-4-line"></i>
                                {(item.length > 18) ? <p>{item.slice(0, 18)}...</p> : <p>{item}</p>}
                            </div>)
                        })}

                    </div>
                </div> : null}
                <div className='Otr-sections'>
                    <div className="sections"><i className="ri-question-line"></i>{isextend ? <span> Help</span> : null}</div>
                    <div className="sections"><i className="ri-settings-3-line"></i>{isextend ? <span> Setting</span> : null}</div>
                    <div className="sections" onClick={logOutUser}><i className="ri-logout-circle-r-line"></i>{isextend ? <span> Log Out</span> : null}</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar