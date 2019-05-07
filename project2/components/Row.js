import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {
    padding: 20,
    flexDirection: 'row',
    height: 150,
  },
  img: {
    width: '20%',
    marginRight: '5%'
  },
  info: {
    width: '75%',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold'
  }
})

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectMovie(props)}>
    <Image
      style={styles.img}
      source={{ uri: props.poster }}
    />
    <View style={styles.info}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>{`${props.year} (${props.type})`}</Text>
    </View>
  </TouchableOpacity>
)

Row.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
}

export default Row
