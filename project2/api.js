const apiKey = '9a9f0617'

const processMovie = movie => ({
  title: movie.Title, 
  year: movie.Year,
  poster: movie.Poster,
  type: movie.Type,
  key: movie.imdbID,
  id: movie.imdbID, 
})

const processMovieDetails = movie => ({
  title: movie.Title,
  year: movie.Year,
  poster: movie.Poster,
  type: movie.Type,
  id: movie.imdbID,
  plot: movie.Plot,
  actors: movie.Actors,
})

export const fetchMovies = async (input) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`)
  const body = await response.json()
  if (body.Response == "False") {
    return []
  } else {
    return body.Search.map(processMovie)
  }
}

export const fetchMovie = async (id) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
  const body = await response.json()
  if (body.Response == "False") {
    return {}
  } else {
    return processMovieDetails(body)
  } 
}
