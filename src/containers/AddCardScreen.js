import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet, FlatList,
    View, TouchableOpacity, Dimensions
} from 'react-native';
import PickLanguage from '../components/PickLanguage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColorCore, secondaryColorCore } from '../style';

import Word from '../components/Word';
import AddWord from '../components/AddWord';

import { connect } from 'react-redux'
import { cleanWord } from '../actions'
import firebase from 'react-native-firebase';


class AddCardScreen extends Component {
    state = {
        box: [],
        title: '',
        language: '',
        like: 0,
        point:0,
    }

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

    renderAddTitle = () => (
        <View>
            <TextInput
                style={styles.title}
                placeholder={'Add title'}
                onChangeText={(title) => this.setState({ title })}
                value={this.state.title}
                underlineColorAndroid={'transparent'}
            />
        </View>
    )

    renderItem = ({ item }) => {
        console.log(item)
    }


    renderWord = () => <FlatList
        style={{ flexGrow: 0 }}
        data={this.props.topic}
        renderItem={({ item }) => <Word item={item} />}
        keyExtractor={item => item.word}
    />

    addCard = () => {
        this.state.box.unshift({
            language: this.state.language,
            title: this.state.title,
            words: this.props.topic,
            like: this.state.like,
            point: this.state.point,
        })
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child('box')
            .set(this.state.box)
        this.props.cleanWord()
        this.props.navigation.navigate('Topics')
    }

    renderAddButton = () => (
        <TouchableOpacity
            style={styles.addButton}
            onPress={this.addCard}
        >
            <Text style={styles.textButton}>Add</Text>
            <Icon name="plus" size={30} color={'white'} />
        </TouchableOpacity>
    )

    handleLanguage = (langValue) => {
        this.setState({ language: langValue });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ height: Dimensions.get("window").height * 0.2 }}>
                    {this.renderAddTitle()}
                    <PickLanguage onSelectLanguage={this.handleLanguage} />
                </View>

                <View style={{ height: Dimensions.get("window").height * 0.55 }}>
                    {this.renderWord()}
                    <AddWord />
                </View>
                <View style={{ height: Dimensions.get("window").height * 0.1 }}>
                    {this.renderAddButton()}
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 5,
        borderWidth: 2,
        borderColor: secondaryColorCore
    },
    addButton: {
        width: 200,
        height: 50,
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: primaryColorCore,
        borderRadius: 15,
        elevation: 2
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const mapStateToProps = ({ topic }) => ({ topic })
export default connect(mapStateToProps, { cleanWord })(AddCardScreen);