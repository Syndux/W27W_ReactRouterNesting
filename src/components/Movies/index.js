import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  const { url } = useRouteMatch();

  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => (
          <NavLink key={movie.id} to={`${url}/${movie.id}`}>
            {movie.title}
          </NavLink>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
