import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.js";
import Home from "./pages/home/index.js";
import Movie from "./pages/movie/index.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="movie/:movie_id" element={<Movie />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;