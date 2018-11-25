import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet, FlatList,
    View, TouchableOpacity,
} from 'react-native';
import PickLanguage from '../components/PickLanguage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColorCore, secondaryColorCore } from '../style';

import Word from '../components/Word';
import AddWord from '../components/AddWord';

import { connect } from 'react-redux'


class AddCardScreen extends Component {
    state = {}

    renderAddTitle = () => (
        <View>
            <TextInput
                style={styles.title}
                placeholder={'Add title'}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
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

    renderAddButton = () => (
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.textButton}>Add</Text>
            <Icon name="plus" size={30} color={'white'} />
        </TouchableOpacity>
    )

    render() {

        return (
            <View style={styles.container}>
                {this.renderAddTitle()}
                <PickLanguage />
                {this.renderWord()}
                <AddWord />
                {this.renderAddButton()}
            </View>
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
        bottom: 26,
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
export default connect(mapStateToProps)(AddCardScreen);