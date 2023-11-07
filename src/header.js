import { Link, Outlet } from "react-router-dom";
import logo from './images/icon100.png'

function Header() {
    return (
        <div>
            <div className="title">
                <Link to="/" className="title-link">
                    <img className="title__icon" src={logo} alt="icon" />
                    <h1>Movie Finder</h1>
                </Link>
            </div>
            {/* <Link to="/moviedetails">Details</Link> */}
            {/* <Link to="/">Home</Link> */}
            <Outlet />
        </div>
    );
}

export default Header;