import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";
export const Constext = createContext();
const ConstextProvider = (props) => {
    const [Input, setInput] = useState("")
    const [showResult, setshowResult] = useState(false)
    const [showLoder, setshowLoder] = useState(false)
    const [ResultData, setResultData] = useState("")
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [preprompt, setpreprompt] = useState(currentUser ? currentUser.History : []);
    const [currentInput, setcurrentInput] = useState("")
    const [isextend, setisextend] = useState(false)
    const [showslider, setshowslider] = useState(false)
    const newChat = () => {
        if (showslider) {
            setshowslider(false)
        }
        setshowResult(false)
        setInput("")
        setshowLoder(false)
    }
    const deldata = () => {
        if (confirm("Are you want clear History ?")) {
            const emptyarr = [];
            setpreprompt(emptyarr)
            const updateUser = { ...currentUser, History: emptyarr }
            localStorage.setItem('currentUser', JSON.stringify(updateUser));
            newChat()
        }

    }

    console.log(currentUser)
    const onsent = async (prompt) => {
        setshowResult(true)
        setshowLoder(true)
        let response;
        if (prompt !== undefined) {
            response = await run(prompt)
        }
        else {
            setcurrentInput(Input)
            const updatedHistory = [...preprompt, Input]
            setpreprompt(updatedHistory);
            // setpreprompt(prev => [...prev, Input]);
            const updateUser = { ...currentUser, History: updatedHistory }
            localStorage.setItem('currentUser', JSON.stringify(updateUser));
            response = await run(Input)
        }
        const respoArry = response.split("**")
        let newresponce = "";

        respoArry.forEach((item, index) => {
            if (index == 0 || index % 2 == 0) {
                newresponce += item;
            }
            else {
                newresponce += `<b> ${item} </b>`
            }

        })
        let newrespo2 = newresponce.split("*").join("</br>")
        setResultData(newrespo2);
        setshowLoder(false);
        setInput("")
    }


    const contextValue = {
        onsent,
        Input, setInput,
        showResult, ResultData, showLoder, preprompt, setpreprompt, newChat, currentInput, deldata, setcurrentInput, isextend, setisextend, showslider, setshowslider, currentUser
    }
    return (
        <Constext.Provider value={contextValue}>
            {props.children}
        </Constext.Provider>
    )
}
export default ConstextProvider