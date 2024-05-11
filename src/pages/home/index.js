import { useState, useEffect } from "react";
import Search from "./Search";
import Movies from "./Movies";

function Home() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("Harry Potter");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=142e1265&s=${search}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} />
      
      <div className="movie-list">
        {
          movies && <> <Movies movies={movies} /> </>
        }

      </div>
    </div>
  );
}
export default Home;