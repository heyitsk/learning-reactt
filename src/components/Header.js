import { LOGO_URL } from "../utils/contants";
import { useState } from "react";

const Header = () => {
    const [buttonState, setbuttonState]= useState("login");
    // console.log("header renderd");   
    

    return (
        <div id="header-container">
            <div id="logo container">
                <img id="logo"src={LOGO_URL} alt="logo"/>
            </div>
            <div id="navbar-container">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Food</a></li>
                    {/* <button onClick={()=>{setbuttonState ("logout")}}>{buttonState}</button> */}
                    {/* as soon as you clicked on the button react updated the buttonState from login to logout and runs the diff algorithm and also refreshes the header. You might think that it just  renders the button but no the whole header component is rendered again. And once it is rerenderd it calculates the diff btw old dom and new dom and it sees that only the button got changed so it updates the button  */}
                    <button onClick={()=>{
                        buttonState==="login"?setbuttonState("logout"):setbuttonState("login")
                    }}>{buttonState}</button>


                </ul>
            </div>
        </div>
    )
}

export default Header;