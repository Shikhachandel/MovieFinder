import React from 'react'
import { Link } from 'react-router-dom'
import bookmark from "../../../images/bookmark-regular.svg"
import watched from "../../../images/eye-solid.svg"
import UserService from '../../../service/dataService'

function Movies({ movies }) {
    const handleBookmarks = async (e, title, id, poster) => {
        e.preventDefault();
        try {
            const data = {title, id, poster}
            await UserService.bookmark(data);
            alert("Movie added to Bookmarks")
        } catch (error) {
            console.error('Bookmark failed: ', error);
            alert(error.status);
        }
    };

    const handleWatchlist = async (e, title, id, poster) => {
        e.preventDefault();
        try {
            const data = {title, id, poster}
            await UserService.watchList(data);
            alert("Movie added to Watchlist")
        } catch (error) {
            console.error('Watchlist failed: ', error);
            alert(error.status);
        }
    };

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
                    {UserService.isLoggedIn && (
                        <div>
                            <button className='movie-icons' onClick={(e) => handleBookmarks(e, Title, imdbID, Poster)}>
                                <img src={bookmark} alt="bookmark" title='Add to Bookmarks'/>
                            </button>
                            <button className='movie-icons' onClick={(e) => handleWatchlist(e, Title, imdbID, Poster)}>
                                <img src={watched} alt="watched" title="Add to Watchlist" />
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

export default Movies