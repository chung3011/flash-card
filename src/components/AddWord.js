import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    View, StyleSheet, Dimensions, Alert,
} from 'react-native';
import { primaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux'
import { addWord } from '../actions'
import firebase from 'react-native-firebase';

class AddWord extends Component {
    state = {}

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child('box')
            .on('value', res => {
                this.setState({ box: res._value != null ? res._value : [] })
            })
    }

    addWord = () => {
        let wordExist = this.props.topic.filter(item => item.word == this.state.word)
        if (wordExist.length !== 0) {
            return Alert.alert('This word exist')
        }
        this.props.addWord({
            word: this.state.word,
            mean: this.state.mean
        })
        this.setState({
            word: '',
            mean: ''
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.word, { justifyContent: 'flex-end' }]}>
                    <TextInput
                        style={styles.text}
                        placeholder={'Word'}
                        onChangeText={(word) => this.setState({ word })}
                        value={this.state.word}
                    />
                </View>
                <View style={[styles.word, { justifyContent: 'flex-start' }]}>
                    <TextInput
                        style={styles.text}
                        placeholder={'Mean'}
                        onChangeText={(mean) => this.setState({ mean })}
                        value={this.state.mean}
                    />
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={this.addWord}
                    >
                        <Icon name="plus-circle" size={35} color={primaryColorCore} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    word: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 2,
        alignItems: 'center'
    },
    text: {
        borderWidth: 2,
        borderColor: primaryColorCore,
        width: 110,
        height: 45,
        marginVertical: 8,
        marginHorizontal: 5,
        borderRadius: 10,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    icon: {
        elevation: 2
    }
})

const mapStateToProps = ({ topic }) => ({ topic })
export default connect(mapStateToProps, { addWord })(AddWord);