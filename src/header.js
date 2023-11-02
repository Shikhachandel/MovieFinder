import { Link, Outlet } from "react-router-dom";

function Header(){
    return(
        <div>
            <div className="title">
            <Link to="/" className="title-link"><h1>Movie Finder</h1></Link> 
            </div>
                {/* <Link to="/moviedetails">Details</Link> */}
                {/* <Link to="/">Home</Link> */}
            <Outlet />
        </div>
    );
}

export default Header;