import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { fetchMovies } from '../api'
import FlatListMovies from './FlatListMovies'

export class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home',
  })

  state = {
    input: '',
    movies: [],
  }

  handleInputChange = (input) => {
    if (input.length < 3) {
      this.setState({
        input,
        movies: [],
      })
    } else {
      this.getMovies(input) 
    } 
  }

  getMovies = async (input) => {
    const results = await fetchMovies(input)
    this.setState({ movies: results })
  }

  handleSelectMovie = movie => {
    this.props.navigation.push('Movie Details', movie)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleInputChange}
          placeholder="Search Movie"
        />
        <View style={styles.movieListContainer}>
          {this.state.movies.length > 0 &&
            <FlatListMovies movies={this.state.movies} onSelectMovie={this.handleSelectMovie}/>
          }
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    fontSize: 20,
    margin: 10
  },
  movieListContainer: {
    flex: 1
  }
});
