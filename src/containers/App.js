import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import firebase from 'react-native-firebase'
import MyCard from './MyCard';
import LoginScreen from './LoginScreen';


class App extends Component {
  state = {}

  componentDidMount() {
    console.log(firebase)
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginScreen />
      </View>
    );
  }
}

export default App;