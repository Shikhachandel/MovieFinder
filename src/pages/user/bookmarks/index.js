import React, { useState, useEffect } from 'react';
import UserService from '../../../service/dataService';
import { Link } from 'react-router-dom';

function Bookmarks() {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        async function fetchBookmarks() {
            try {
                const response = await UserService.getBookmarks();
                setBookmarks(response);
            } catch (error) {
                console.error('Failed to fetch bookmarks:', error);
            }
        }

        fetchBookmarks();
    }, []);

    return (
            <div className='rows'>
                {bookmarks.map(movie => (
                    <Link className="movie-container" to={`/movie/${movie.movie_id}`}>
                        <div className="movie">
                            <img src={movie.poster} alt="poster" />
                            <p className="movie-title">{movie.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        
    );
}

export default Bookmarks;
