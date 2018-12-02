import React, { Component } from 'react';
import {
    Text, ActivityIndicator,
    View, StyleSheet, Dimensions, TouchableOpacity, TextInput
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'
import MyCardScreen from './MyCardScreen';
import { connect } from 'react-redux'
import { addInfo } from '../actions'

class FirstScreen extends Component {
    state = {
        name: '',
        box: 0,
        boxLike: [],
        listUserUid: [],
        isSignOut: false
    }

    componentDidMount() {
        this.loadData()
    }


    loadData() {
        // firebase.database().ref(`/users`)
        //     .child(firebase.auth().currentUser.uid)
        //     .on('value', res => {
        //         this.setState({
        //             name: res._value == null ? '' : res._value.name,
        //             box: res._value == null ? null : res._value.box,
        //             boxLike: res._value == null ? [] : res._value.box
        //         })
        //     })
        firebase.database().ref(`/usersUid`)
            .once('value', res => {
                this.setState({
                    listUserUid: res._value == null ? [] : res._value
                })
            })
    }

    saveUserUid() {
        this.state.listUserUid.unshift(firebase.auth().currentUser.uid)
        firebase.database().ref(`/usersUid`)
            .set(this.state.listUserUid)
    }

    like = () => {
        let myTopics = this.state.boxLike.filter(item => item.userUid == firebase.auth().currentUser.uid)
        let result = []
        myTopics = myTopics.map(item => result = result.concat(item.like == null ? [] : item.like))
        return result.length
    }

    _onPressTopics = () => {
        this.props.navigation.navigate('Topics', {
            listUserUid: this.state.listUserUid.filter(item => item !== firebase.auth().currentUser.uid),
            box: this.props.box
        })
    }

    _onPressDiscovery = () => {
        let check = this.state.listUserUid.filter(item => item == firebase.auth().currentUser.uid)
        check.length == 0 && this.saveUserUid()
        this.props.navigation.navigate('Discovery', {
            listUserUid: this.state.listUserUid.filter(item => item !== firebase.auth().currentUser.uid),
            // box: this.props.box
        })
    }

    onSubmit = (event) => {
        this.props.addInfo({
            name: event.nativeEvent.text
        })
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child('name')
            .set(event.nativeEvent.text)
    }

    signOut = () => {
        this.setState({ isSignOut: true })
        firebase.auth().signOut()
    }


    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                <View style={styles.container}>
                    <Text style={styles.text1}>Username</Text>
                    <TextInput
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        placeholder={'Enter your name'}
                        style={{ fontSize: 20, textAlign: 'center', width: 160 }}
                        returnKeyType={'done'}
                        onSubmitEditing={this.onSubmit.bind(this)}
                        defaultValue={this.props.info.name}
                    />

                    <Text style={styles.text1} >Number of Box</Text>
                    <Text style={styles.text2}>{this.props.box.length}</Text>
                    <Text style={styles.text1} >Like</Text>
                    <Text style={styles.text2}>{this.like()}</Text>
                </View>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15, width: Dimensions.get("window").width * 0.7 }}>
                        <TouchableOpacity
                            style={styles.box}
                            onPress={this._onPressTopics}
                        >
                            <Icon name="user" size={20} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.box}
                            onPress={this._onPressDiscovery}
                        >
                            <Icon name="users" size={20} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    {this.state.isSignOut
                        ? <ActivityIndicator size="large" color={primaryColorCore} ></ActivityIndicator>
                        : <TouchableOpacity
                            style={styles.box}
                            onPress={this.signOut}
                        >
                            <Icon name="sign-out" size={20} color={'white'} />
                        </TouchableOpacity>
                    }

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

const mapStateToProps = ({ box, info }) => ({ box, info })
export default connect(mapStateToProps, { addInfo })(FirstScreen);