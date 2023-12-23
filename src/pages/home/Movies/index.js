import React from 'react'
import { Link } from 'react-router-dom'

function Movies({ movies }) {
    return (
        <>
            {movies?.Search?.map((
                { imdbID, Title, Poster }
            ) => (
                <div className="movies" key={imdbID}>
                    <Link className="movie-container" to={`/movie/${imdbID}`}>
                        <div className="movie">
                            <img src={Poster} alt="poster" />
                            <p className="movie-title">{Title}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Movies