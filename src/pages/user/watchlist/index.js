import React, { useState, useEffect } from 'react';
import UserService from '../../../service/dataService';
import { Link } from 'react-router-dom';

function Watchlist() {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        async function fetchWatchlist() {
            try {
                const response = await UserService.getWatchlist();
                setWatchlist(response);
            } catch (error) {
                console.error('Failed to fetch watchlist: ', error);
            }
        }

        fetchWatchlist();
    }, []);

    return (
            <div className='rows'>
                {watchlist.map(movie => (
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

export default Watchlist;
