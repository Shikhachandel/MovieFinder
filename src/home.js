import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("Harry Potter");
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=142e1265`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  function getDetails() {
    console.log("in getDetails")
    var searchedMovie = document.getElementById('search').value
    setSearch(searchedMovie);
    document.getElementById('search').value = ''
  };

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.charCode == 13) {
    getDetails();
  }
  };

  return (
    <div>
        <div className="search-container">
            <input type="text" id="search"  className="search-box" placeholder="Search the movie" onKeyPress={handleKeypress}/>
            <button onClick={getDetails} id="search-btn">Search</button>
        </div>
        <div className="movie-list">
        {
            movies && <> {movies.Search.map((movie) => (
                <div className="movies" key={movie.imdbID}>
                  {/* <img src={movie.Poster} /> */}
                  <Link className="movie-container" to={`/moviedetails/${movie.imdbID}`}><div className="movie">
                  <img src={movie.Poster} /><p className="movie-title">{movie.Title}</p>
                    </div></Link>
                </div>
              ))}</>
            }
     
        </div>
    </div>
  );
}
export default Home;
