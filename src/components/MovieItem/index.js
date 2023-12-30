import './index.css'

import {Link} from 'react'

const MovieItem = props => {
  const {movie} = props
  const {id} = movie
  console.log(movie)
  return (
    <li>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie"
          className="poster-img"
        />
        <div className="text">
          <p>{movie.title}</p>
          <p>Rating :{movie.vote_average}</p>
          <button className="button" type="button">
            View Details
          </button>
        </div>
      </div>
    </li>
  )
}

export default MovieItem
