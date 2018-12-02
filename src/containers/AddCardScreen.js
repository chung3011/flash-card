import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet, FlatList,
    View, TouchableOpacity, Dimensions, Alert
} from 'react-native';
import PickLanguage from '../components/PickLanguage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColorCore, secondaryColorCore } from '../style';

import Word from '../components/Word';
import AddWord from '../components/AddWord';
import firebase from 'react-native-firebase'


import { connect } from 'react-redux'
import { cleanWord, addTopic } from '../actions'


class AddCardScreen extends Component {
    state = {
        box: [],
        title: '',
        language: 'English',
    }

    componentWillUnmount() {
        this.props.cleanWord()
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

    renderWord = () => (
        <FlatList
            style={{ flexGrow: 0 }}
            data={this.props.words}
            renderItem={({ item }) => <Word item={item} />}
            keyExtractor={item => item.word}
        />
    )

    addCard = () => {
        if (this.props.words.length == 0) {
            return Alert.alert('Can not create topic without word!')
        }
        this.props.addTopic({
            language: this.state.language,
            title: this.state.title,
            words: this.props.words,
            userUid: firebase.auth().currentUser.uid
        })
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
                    <AddWord words={this.props.words} />
                    {!this.state.canceled && this.renderWord()}
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
        fontSize: 16,
        paddingHorizontal: 10,
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
        elevation: 2,
        marginTop: 20
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

const mapStateToProps = ({ words, box }) => ({ words, box })
export default connect(mapStateToProps, { cleanWord, addTopic })(AddCardScreen);