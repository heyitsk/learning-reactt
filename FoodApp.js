import React from "react";
import ReactDOM from "react-dom/client";

/*
header
    log
    navbar
body
    search bar and search button
    rest cards
footer 
    copyright
*/

const Header = () => {
    return (
        <div id="header-container">
            <div id="logo container">
                <img id="logo"src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="logo"/>
            </div>
            <div id="navbar-container">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Food</a></li>
                </ul>
            </div>
        </div>
    )
}

const RestCard = () => {
    return(
        <div id="rest-card">
            <div id="restimg-container">
                <img src="https://b.zmtcdn.com/data/pictures/4/19952834/fd8f2e513d387de3d8888544947f9aec_featured_v2.jpg" alt="rest-image"/>
            </div>
            <div id="rest-info">
                <h4>connough place</h4>
                <h5>rating</h5>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div id="body-container">
            <div id="search-container">
                <input type="text" placeholder="Search.."></input>
                <button id="search-button" style={{backgroundColor: "gray", border: "none", borderRadius: "5px", padding: "5px"}}>Search</button>
            </div>
            <div id="restcard-container">
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>
                <RestCard/>



            </div>
        </div>
    )
}

const Footer = ()=> {
    return(
        <div id="footer-container">
            <ul>
                <li>Copyright</li>
                <li>Email</li>
                <li>Contact us</li>
            </ul>
        </div>
    )
}



const FoodApp = () => {
    return (
    <div id="FoodApp">
        <Header/>
        <Body/>
        <Footer/>

    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp/>)