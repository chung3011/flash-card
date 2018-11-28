import React, { Component } from 'react';
import {
  Text, StyleSheet, Dimensions,
  View, TouchableOpacity,
} from 'react-native';
import { primaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Topic extends Component {
  state = {}

  render() {

    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate('Learn', {
            topic: this.props.item,
          })}
          onLongPress={() => this.props.navigation.navigate('OwnCard', {
            topic: this.props.item
          })}
        >
          <View style={styles.header}>
            <Text style={styles.language}>{this.props.item.language}</Text>
            <TouchableOpacity>
              <Icon style={{ marginEnd: 5, alignSelf: 'flex-end' }} name="question-circle" size={27} color={'white'} />

            </TouchableOpacity>
          </View>
          <Text style={styles.topic}>{this.props.item.title}</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <View style={styles.flexRow}>
            <Icon style={{ marginEnd: 5 }} name="heart" size={17} />
            <Text style={{ width: 25 }}>{this.props.item.like}</Text>
          </View>
          <View style={styles.flexRow}>
            <Icon style={{ marginEnd: 5, }} name="graduation-cap" size={17} />
            <Text style={{ width: 25 }}>{this.props.item.learn}</Text>
          </View>
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
    borderColor: primaryColorCore
  },
  header: {
    backgroundColor: primaryColorCore,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    flexDirection: 'row',
  },
  language: {
    fontSize: 17,
    color: '#f2f2f2',
    flex: 1
  },
  topic: {
    fontSize: 20,
    margin: 10,
    color: '#262626'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 3
  },
  flexRow: {
    flexDirection: 'row',
  }
})
export default Topic;