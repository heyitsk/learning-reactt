import { LOGO_URL } from "../utils/contants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;