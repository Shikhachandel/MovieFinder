import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
let params = useParams();
const [movie, setMovie] = useState();
useEffect(() => {
    fetch("http://www.omdbapi.com/?i="+params.movieid+"&apikey=142e1265")
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

return(<div>
    {movie ? <>
                <div className="desc-container">
                    <div className="desc-poster">
                        <img src={movie.Poster} className="poster"/>
                    </div>
                    <div className="desc-text">
                        <h2>{movie.Title}</h2>
                        <p className="plot">{movie.Plot}</p>
                        <p><a>Actors</a> : {movie.Actors}</p>
                        <p><a>Released</a> : {movie.Released}</p>
                        <p><a>IMDB Ratings</a> : {movie.imdbRating}</p>
                        <p><a>Runtime</a> : {movie.Runtime}</p>
                    </div>
                </div>
            </> : <h1>Loading...</h1>}
 </div>);   
}

export default Details;