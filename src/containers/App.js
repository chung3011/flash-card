import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import firebase from 'react-native-firebase'
import MyCard from './MyCard';


class App extends Component {
  state = {}

  componentDidMount() {
    console.log(firebase)
  }


  render() {
    return (
      <View>
        <MyCard />
      </View>
    );
  }
}

export default App;