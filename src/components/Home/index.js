import './index.css'
import React, {useState, useEffect} from 'react'
import MovieItem from '../MovieItem'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '79126e66b5fe786f82e39d0c107bc44e'
      const language = 'en-US'
      const page = 1
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`,
      )
      const data = await response.json()
      setMovies(data.results)
    }

    fetchData()
  }, [])
  return (
    <div>
      <h1>Popular Movies Page</h1>
      <ul className="movie">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default Home
