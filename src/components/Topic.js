import React, { Component } from 'react';
import {
  Text, StyleSheet, Dimensions,
  View, TouchableOpacity,
} from 'react-native';
import { primaryColorYellow } from '../style';

class Topic extends Component {
  state = {}
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.language}>{this.props.item.language}</Text>
          </View>
          <Text style={styles.topic}>{this.props.item.title}</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text>10</Text>
          <Text>40/50</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 60,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: primaryColorYellow
  },
  header: {
    backgroundColor: primaryColorYellow,
    padding: 10
  },
  language: {
    fontSize: 14
  },
  topic: {
    fontSize: 20,
    margin: 10,
    color: '#262626'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
export default Topic;