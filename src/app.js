import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.js";
import Home from "./pages/home/index.js";
import Movie from "./pages/movie/index.js";
import Login from "./pages/user/login/index.js";
import Signup from "./pages/user/signup/index.js";
import Bookmarks from "./pages/user/bookmarks/index.js";
import WatchList from "./pages/user/watchlist/index.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="movie/:movie_id" element={<Movie />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="bookmarks" element={<Bookmarks />} />
                    <Route path="watchlist" element={<WatchList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;