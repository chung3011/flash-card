import React, { Component } from 'react';
import {
    Text,
    View, StyleSheet, Dimensions, TouchableOpacity, TextInput
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'
import MyCardScreen from './MyCardScreen';

class FirstScreen extends Component {
    state = {
        name: '______',
        listUserUid: []
    }

    componentDidMount() {
        this.loadData()
        this.saveUserUid()
    }

    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .once('value', res => {
                this.setState({
                    name: res._value.name,
                    boxLength: res._value.box == null ? 0 : res._value.box.length
                })
            })
        firebase.database().ref(`/users`)
            .child('userUid')
            .once('value', res => {
                this.setState({
                    listUserUid: res._value == null ? [] : res._value
                })
            })
    }

    saveUserUid() {
        this.state.listUserUid.unshift(firebase.auth().currentUser.uid)
        firebase.database().ref(`/users`)
            .child('userUid')
            .set(this.state.listUserUid)
    }

    signOut = () => { firebase.auth().signOut() }


    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                <View style={styles.container}>
                    <Text style={styles.text1}>Username</Text>
                    <TextInput
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        placeholder={'Enter your name'}
                        style={{ fontSize: 20, textAlign: 'center', width: 160 }}
                    >
                        {this.state.name}</TextInput>

                    <Text style={styles.text1} >Number of Box</Text>
                    <Text style={styles.text2}>{this.state.boxLength}</Text>
                    <Text style={styles.text1} >Like</Text>
                    <Text style={styles.text2}>________</Text>
                </View>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15, width: Dimensions.get("window").width * 0.7 }}>
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => this.props.navigation.navigate('Topics')}
                        >
                            <Icon name="user" size={20} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => this.props.navigation.navigate('Discovery', {
                                listUserUid: this.state.listUserUid.filter(item => item !== firebase.auth().currentUser.uid)
                            })}
                        >
                            <Icon name="users" size={20} color={'white'} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.box}
                        onPress={this.signOut}
                    >
                        <Icon name="sign-out" size={20} color={'white'} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: primaryColorCore,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        height: Dimensions.get("window").height * 0.5,
        width: Dimensions.get("window").width * 0.8
    },
    text1: {
        color: secondaryColorCore,
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10
    },
    text2: {
        fontSize: 20,
        color: 'black',
        marginVertical: 5
    },
    box: {
        borderColor: primaryColorCore,
        backgroundColor: primaryColorCore,
        borderRadius: 12,
        borderWidth: 1,
        marginVertical: 10,
        height: 45,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FirstScreen;