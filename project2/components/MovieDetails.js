import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { fetchMovie } from '../api'

export class MovieDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title'),
  })
  
  state = {
    movie: {}
  }

  componentDidMount() {
    this.getMovie()
  }

  getMovie = async () => {
    const result = await fetchMovie(this.props.navigation.getParam('id'))
    this.setState({ movie: result })
  }
  
  render() {
    return (
      <View>
        {this.state.movie &&
          <ScrollView>
            <View>
              <Text style={styles.text}>{this.state.movie.title}</Text>
              <Text style={styles.text}>{this.state.movie.year}</Text>
              <Text style={styles.text}>{this.state.movie.actors}</Text>
              <Text style={styles.text}>{this.state.movie.plot}</Text>
              <Image
                style={styles.img}
                source={{ uri: this.state.movie.poster }}
              />
            </View>
            
          </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    padding: 5
  },
  img: {
    alignSelf: 'center',
    width: ((Dimensions.get('window').width - 30) * .75),
    height: ((Dimensions.get('window').width - 30) * .75) * 1.4266666667
  }
});
