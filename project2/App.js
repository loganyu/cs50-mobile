<script src="http://localhost:8097"></script>

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home } from './components/Home'
import { MovieDetails } from './components/MovieDetails'

const MainStack = createStackNavigator(
  {
    Home: Home,
    'Movie Details': MovieDetails,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)

const AppContainer = createAppContainer(MainStack)

export default AppContainer
