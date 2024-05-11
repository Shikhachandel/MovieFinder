import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useDebounce from '../../../hooks/useDebounce';

function Search({ setSearch }) {
    const [searchBar, setSearchBar] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [searchResult, setSearchResult] = useState();

    function getDetails() {
        var searchedMovie = searchBar
        setSearch(searchedMovie);
        setShowSearchResult(false);
    };

    const debounce = useDebounce(searchBar);

    useEffect(() => {
        setShowSearchResult(true);
        fetch(`https://www.omdbapi.com/?apikey=142e1265&s=${debounce}`)
            .then((response) => response.json())
            .then((data) => setSearchResult(data));
    }, [debounce])


    const handleKeyDown = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            getDetails();
        }
    };


    const handleBlur = e => {
        if (e.relatedTarget?.id === 'search-movie-title') {
            setShowSearchResult(true);
        } else {
            setShowSearchResult(false);
        }
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    id="search"
                    className="search-box"
                    placeholder="Search the movie"
                    value={searchBar}
                    onChange={(e) => setSearchBar(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setShowSearchResult(true)}
                    onBlur={handleBlur}
                />
                <div className="suggestion-box">
                    <div className={showSearchResult ? "suggestion-list" : "suggestion-list inactive"}>
                        {
                            searchResult && <> {
                                searchResult?.Search?.map((movie) => (
                                    <div key={movie.imdbID}>
                                        <Link id="search-movie-title" className="link" to={`/movie/${movie.imdbID}`}>
                                            <p className="movie-title">{movie.Title}</p>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </div>
            </div>
            <button onClick={getDetails} id="search-btn">Search</button>
        </div>
    )
}

export default Search