import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const FlatListMovies = props => <FlatList
  renderItem={({ item }) => <Row {...item} onSelectMovie={props.onSelectMovie} />}
  data={props.movies} 
/>

FlatListMovies.propTypes = {
  movies: PropTypes.array,
}

export default FlatListMovies
