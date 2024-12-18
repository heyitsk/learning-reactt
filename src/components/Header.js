import { LOGO_URL } from "../utils/contants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { userContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [buttonState, setbuttonState]= useState("login");
    console.log("header renderd");   
    const {loggedInUser} = useContext(userContext)
    console.log(loggedInUser);
    

    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    


    useEffect(()=>{
        console.log("useEffect called");
        
    },[buttonState])
    //everytime buttonState changes it will be called 
    
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between m-4 border-4 border-black-500 items-center shadow-md">
            <div id="logo container">
                <img className="w-36"src={LOGO_URL} alt="logo"/>
            </div>
            <div >
                <ul className="flex p-8">
                    <li className="px-3">Interent Status:{onlineStatus?"✔️":"❌"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>                      {/* if you use anchor tags to reroute you they refresh the entire page so we use LINK to */}
                    <li className="px-3"><Link to="/about">About</Link></li>
                    <li className="px-3"><Link to="/contact">Contact</Link></li>  
                    <li className="px-3"><Link to="/cart">Cart ({cartItems.length})</Link></li>                    

                    <li className="px-3"><Link to="/grocery">{loggedInUser}</Link></li>  
                    <li className="px-3">Grocery</li>
                    {/* <button onClick={()=>{setbuttonState ("logout")}}>{buttonState}</button> */}
                    {/* as soon as you clicked on the button react updated the buttonState from login to logout and runs the diff algorithm and also refreshes the header. You might think that it just  renders the button but no the whole header component is rendered again. And once it is rerenderd it calculates the diff btw old dom and new dom and it sees that only the button got changed so it updates the button  */}
                    <button className="bg-slate-700 text-white px-3 rounded-sm py-1 " onClick={()=>{
                        buttonState==="login"?setbuttonState("logout"):setbuttonState("login")
                    }}>{buttonState}</button>


                </ul>
            </div>
        </div>
    )
}

export default Header;