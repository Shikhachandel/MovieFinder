import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Home() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("Harry Potter");
  const [searchBar, setSearchBar] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [showSearchResult, setShowSearchResult] = useState(true);

  const ref = useRef(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=142e1265&s=${search}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  useEffect(() => {
    if (searchBar.length > 2) {
      setShowSearchResult(true);
      fetch(`https://www.omdbapi.com/?apikey=142e1265&s=${searchBar}`)
        .then((response) => response.json())
        .then((data) => setSearchResult(data));
    }
  }, [searchBar])

  function getDetails() {
    var searchedMovie = searchBar
    setSearch(searchedMovie);
    setShowSearchResult(false);
  };

  const handleKeyDown = e => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      getDetails();
    }
  };

  const handleBlur = e => {
    if (e.relatedTarget?.id === 'search-movie-title'){
      setShowSearchResult(true);
    } else {
      setShowSearchResult(false);
    }
  }

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input
            ref={ref}
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
                      <Link id="search-movie-title"  className="link" to={`/moviedetails/${movie.imdbID}`}>
                        <p className="movie-title">{movie.Title}</p>
                      </Link>
                    </div>
                  ))}  </>
              }
            </div>
          </div>
        </div>
        <button onClick={getDetails} id="search-btn">Search</button>

      </div>
      <div className="movie-list">
        {
          movies && <> {movies?.Search?.map((movie) => (
            <div className="movies" key={movie.imdbID}>
              {/* <img src={movie.Poster} /> */}
              <Link className="movie-container" to={`/moviedetails/${movie.imdbID}`}>
                <div className="movie">
                  <img src={movie.Poster} alt="poster" />
                  <p className="movie-title">{movie.Title}</p>
                </div>
              </Link>
            </div>
          ))}</>
        }

      </div>
    </div>
  );
}
export default Home;