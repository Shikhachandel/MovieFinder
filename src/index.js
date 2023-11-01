import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Home  from "./home.js";
import Details from "./moviedetails.js";
import "./style.css"

function App(){
    return(
        <BrowserRouter>
        <Layout />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="moviedetails/:movieid" element={<Details />}></Route>
            {/* <Route path="searchForm" element={<SearchForm />}></Route> */}
        </Routes>
        </BrowserRouter>
        
    );
}

render(<App/>, document.getElementById("root"));
