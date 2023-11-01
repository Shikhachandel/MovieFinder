import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
let params = useParams();
const [movie, setMovie] = useState();
useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${params.movieid}&apikey=142e1265`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [params.movieid]);

return(<div>
    {movie ? <>
                <div className="desc-container">
                    <div className="desc-poster">
                        <img src={movie.Poster} alt="poster" className="poster"/>
                    </div>
                    <div className="desc-text">
                        <h2>{movie.Title}</h2>
                        <p className="plot">{movie.Plot}</p>
                        <p>Actors : {movie.Actors}</p>
                        <p>Released : {movie.Released}</p>
                        <p>IMDB Ratings : {movie.imdbRating}</p>
                        <p>Runtime : {movie.Runtime}</p>
                    </div>
                </div>
            </> : <h1>Loading...</h1>}
 </div>);   
}

export default Details;