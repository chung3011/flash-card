import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet,
    View, TouchableOpacity, Dimensions, FlatList
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddWord from '../components/AddWord'
import Word from '../components/Word';

import { connect } from 'react-redux'
import { addWords, cleanWord, updateTopic, delTopic } from '../actions'

import firebase from 'react-native-firebase';

class OwnCardScreen extends Component {
    state = {
        wordFilter: []
    }

    componentDidMount() {
        this.props.addWords({
            words: this.props.navigation.getParam("topic").words
        })
    }

    componentWillUnmount() {
        this.props.cleanWord()

    }

    renderEditTitle = () => (
        <View style={{ marginTop: 5, width: Dimensions.get("window").width * 0.95 }}>
            <Text style={styles.title}>Title: {this.props.navigation.getParam("topic").title}</Text>
        </View>
    )

    renderEditLanguage = () => (
        <View style={{ width: Dimensions.get("window").width * 0.95 }}>
            <Text style={styles.title}>Language: {this.props.navigation.getParam("topic").language}</Text>
        </View>
    )

    _searchWord = (text) => {
        this.setState({
            text: text,
            wordFilter: this.props.words.filter(item => item.word == text)
        })
    }

    renderSearch = () => (
        <View style={{
            width: Dimensions.get("window").width * 0.6,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextInput
                style={[styles.title, { flex: 1, }]}
                placeholder={'Search'}
                onChangeText={(text) => this._searchWord(text)}
                value={this.state.text}
                underlineColorAndroid={'transparent'}
            />
            <TouchableOpacity style={{ marginTop: 8 }} >
                <Icon name="question-circle" size={40} color={primaryColorCore} />
            </TouchableOpacity>

        </View>
    )

    renderDetail = () => (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
            width: Dimensions.get("window").width * 0.7
        }}>
            <View style={{ marginHorizontal: 15, flexDirection: 'row' }}>
                <Icon style={{ marginEnd: 5 }} name="heart" size={20} />
                <Text style={{ marginLeft: 5 }}>
                    {this.props.navigation.getParam("topic").like == null
                        ? 0
                        : this.props.navigation.getParam("topic").like.length}
                </Text>
            </View>
            <View style={{ marginHorizontal: 15, flexDirection: 'row' }}>
                <Icon style={{ marginEnd: 5 }} name="graduation-cap" size={20} />
                <Text style={{ marginLeft: 5 }}>
                    {this.props.navigation.getParam("topic").words.filter(item => item.status == true).length}
                </Text>
            </View>
            <View style={{ marginHorizontal: 15, flexDirection: 'row' }}>
                <Icon style={{ marginEnd: 5 }} name="gamepad" size={20} />
                <Text style={{ marginLeft: 5 }}>{this.props.navigation.getParam("topic").point}</Text>
            </View>
        </View>
    )

    renderList = (data) => {
        return <Word
            item={data.item}
            date={this.props.navigation.getParam("topic").date}
            screen={'ownCard'} />
    }

    renderWord = () => (
        <AddWord words={this.props.words} />
    )

    updateBox = () => {
        this.props.updateTopic({
            date: this.props.navigation.getParam("topic").date,
            words: this.props.words
        })
        this.props.navigation.push('Topics')
    }

    renderUpdateButton = () => (
        <TouchableOpacity
            style={styles.updateButton}
            onPress={this.updateBox}
        >
            <Text style={styles.textButton}>Update</Text>
        </TouchableOpacity>
    )

    deleteBox = () => {
        this.props.delTopic({
            date: this.props.navigation.getParam("topic").date
        })
        this.setState({ deleteBox: true })
        this.props.navigation.push('Topics')
    }

    renderDeleteButton = () => (
        <TouchableOpacity
            style={styles.delButton}
            onPress={this.deleteBox}
        >
            <Icon name="trash" size={30} color={'white'} />
        </TouchableOpacity>
    )

    render() {
        return (

            <View style={styles.container}>
                <View style={{ height: Dimensions.get("window").height * 0.31, alignItems: 'center' }}>
                    {this.renderEditTitle()}
                    {this.renderEditLanguage()}
                    {this.renderSearch()}
                    {this.renderDetail()}
                </View>
                {this.renderWord()}
                <View style={{ height: Dimensions.get("window").height * 0.36, alignItems: 'center' }}>
                    <FlatList
                        style={{ flexGrow: 0 }}
                        data={this.state.wordFilter.length == 0
                            ? this.props.words
                            : this.state.wordFilter}
                        renderItem={this.renderList}
                        keyExtractor={item => item.toString()}
                    />
                </View>
                <View style={{ height: Dimensions.get("window").height * 0.1, flexDirection: 'row' }}>
                    {this.renderUpdateButton()}
                    {this.renderDeleteButton()}
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: secondaryColorCore,
        marginHorizontal: 20,
        fontSize: 15,
        color: 'black'
    },
    updateButton: {
        width: 180,
        height: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: primaryColorCore,
        borderRadius: 15,
        elevation: 2,
        marginTop: 20,
        marginLeft: 40
    },
    delButton: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 10,
        elevation: 2,
        marginTop: 20,
        marginLeft: 20
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

const mapStateToProps = ({ words, box }) => ({ words, box })
export default connect(mapStateToProps, { addWords, cleanWord, updateTopic, delTopic })(OwnCardScreen);