import './index.css'

import React, {useState, useEffect} from 'react'

import MovieItem from '../MovieItem'

const UpcomingMovie = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '79126e66b5fe786f82e39d0c107bc44e'
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
      )
      const data = await response.json()
      setMovies(data.results)
    }

    fetchData()
  }, [])
  return (
    <div className="upcoming">
    <h1>Upcoming Movies Page</h1>
      <ul className="movie">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default UpcomingMovie
