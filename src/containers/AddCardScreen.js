import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet,
    View, TouchableOpacity,
} from 'react-native';
import PickLanguage from '../components/PickLanguage';
import Word from '../components/Word';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryColorCore } from '../style';

import { connect } from 'react-redux'


class AddCardScreen extends Component {
    state = {}

    renderAddTitle = () => (
        <View>
            <TextInput
                style={styles.title}
                placeholder={'Add title'}
                onChangeText={(text) => this.setState({ text })}
                value={this.props.topic.title}
                underlineColorAndroid={'transparent'}
            />
        </View>
    )

    renderWord = () => (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Word side={'left'} />
                <Word side={'right'} />
            </View>
        </View>
    )

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
        borderColor: primaryColorCore
    },
    addButton: {
        width: 125,
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

const mapStateToProps = (topic) => ({ topic })
export default connect(mapStateToProps)(AddCardScreen);