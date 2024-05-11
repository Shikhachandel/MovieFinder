import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/icon100.png';
import ThemeContext from "../../context/theme/ThemeContext";
import UserService from "../../service/dataService"; 
import { useNavigate } from 'react-router-dom';
import bookmark from "../../images/bookmark-regular.svg"
import watched from "../../images/eye-solid.svg"

function Header() {
    const { changeTheme } = useContext(ThemeContext);
    const isLoggedIn = UserService.isLoggedIn;
    const navigate = useNavigate();

    const handleLogout = () => {
        UserService.logout();
        changeTheme();
        navigate("/");
    };

    return (
        <div className="title">
            <Link to="/" className="title-link">
                <img className="title__icon" src={logo} alt="icon" />
                <h1>Movie Finder</h1>
            </Link>
            <button className="theme-button" onClick={changeTheme}>Change Theme</button>
            {isLoggedIn ? (
                <div>
                    <button className="auth-button">
                        <Link className='movie-icons' to='/bookmarks'>
                            <img src={bookmark} alt="bookmark" title='Add to Bookmarks'/>
                        </Link> 
                    </button>
                    <button className="auth-button">
                        <Link className='movie-icons' to="/watchlist">
                            <img src={watched} alt="watched" title="Add to Watchlist" />
                        </Link>
                    </button>
                
                    <button className="auth-button" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button><Link to="/login" className="auth-button">Login / Register</Link></button>
            )}
        </div>
    );
}

export default Header;
