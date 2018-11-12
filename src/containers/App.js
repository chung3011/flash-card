import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import firebase from 'react-native-firebase'


class App extends Component {
  state = {}

  componentDidMount() {
    console.log(firebase)
  }


  render() {
    return (
      <View>
        <Text>abc</Text>
      </View>
    );
  }
}

export default App;