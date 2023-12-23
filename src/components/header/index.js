import { Link } from "react-router-dom";
import logo from '../../images/icon100.png'
import { useContext } from "react";
import ThemeContext from "../../context/theme/ThemeContext";

function Header() {
    const {changeTheme} = useContext(ThemeContext)
    return (
        <div className="title">
            <Link to="/" className="title-link">
                <img className="title__icon" src={logo} alt="icon" />
                <h1>Movie Finder</h1>
            </Link>
            <button className="theme-button" onClick={changeTheme}>Change Theme</button>
        </div>
    );
}

export default Header;