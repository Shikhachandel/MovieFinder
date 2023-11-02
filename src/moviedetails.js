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
                        <div className="plot">{movie.Plot}</div>
                        <div><div className="plot">Actors</div> : {movie.Actors}</div>
                        <div><div className="plot">Released</div> : {movie.Released}</div>
                        <div><div className="plot">IMDB Ratings</div> : {movie.imdbRating}</div>
                        <div><div className="plot">Runtime</div> : {movie.Runtime}</div>
                    </div>
                </div>
            </> : <h1>Loading...</h1>}
 </div>);   
}

export default Details;