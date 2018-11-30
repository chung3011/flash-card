import React, { Component } from 'react';
import {
    Text, TextInput, StyleSheet,
    View, TouchableOpacity, Dimensions, FlatList
} from 'react-native';

import firebase from 'react-native-firebase';

import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import WordForm from './../components/WordForm'


class OtherCard extends Component {
    state = {
        isLike: this.props.navigation.getParam("topic").like == null
            ? []
            : this.props.navigation.getParam("topic").like.filter(item => item == firebase.auth().currentUser.uid),
        box: [],
        listLike: this.props.navigation.getParam("topic").like == null
            ? []
            : this.props.navigation.getParam("topic").like
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`/users`)
            .child(this.props.navigation.getParam("topic").userUid)
            .child('box')
            .once('value', res => {
                this.setState({
                    box: res._value != null ? res._value : [],
                })
            })
    }

    renderTitle = () => (
        <View style={{ marginTop: 10, width: Dimensions.get("window").width * 0.95 }}>
            <Text style={styles.title}>{this.props.navigation.getParam("topic").title}</Text>
        </View>
    )

    renderLanguage = () => (
        <View style={{ marginTop: 5, width: Dimensions.get("window").width - 60 }}>
            <Text style={styles.title}>{this.props.navigation.getParam("topic").language}</Text>
        </View>
    )

    renderList = (data) => {
        return <WordForm item={data.item} />
    }

    renderAddButton = () => (
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.textButton}>Add</Text>
            <Icon name="plus" size={30} color={'white'} />
        </TouchableOpacity>
    )

    _onPressLike = () => {
        let indexTopic = this.state.box.findIndex(topic => topic.date == this.props.navigation.getParam("topic").date
            && topic.userUid == this.props.navigation.getParam("topic").userUid)
        if (this.state.isLike.length == 0) {
            this.state.listLike.unshift(firebase.auth().currentUser.uid)
            firebase.database().ref('/users')
                .child(this.props.navigation.getParam("topic").userUid)
                .child('box')
                .child(`${indexTopic}`)
                .update({
                    like: indexTopic == -1 ? null : this.state.listLike
                })
            this.setState({ isLike: [1] })
            // this.props.navigation.getParam("onOffMyLike")(this.state.isLike)
        } else {
            let index = this.state.listLike.indexOf(firebase.auth().currentUser.uid)
            this.state.listLike.splice(index, 1)
            firebase.database().ref('/users')
                .child(this.props.navigation.getParam("topic").userUid)
                .child('box')
                .child(`${indexTopic}`)
                .update({
                    like: indexTopic == -1 ? null : this.state.listLike
                })
            this.setState({ isLike: [] })
            // this.props.navigation.getParam("onOffMyLike")(this.state.isLike)
        }
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                {this.renderLanguage()}
                <TouchableOpacity
                    style={{ marginVertical: 15, flexDirection: 'row' }}
                    onPress={this._onPressLike}>
                    <Icon name="heart" size={20}
                        style={{ color: this.state.isLike.length != 0 ? primaryColorCore : 'gray' }} />
                    <Text style={{ marginHorizontal: 9 }}>
                        {this.state.listLike == null
                            ? 0
                            : this.state.listLike.length}
                    </Text>
                </TouchableOpacity>
                <FlatList
                    style={{
                        flexGrow: 0,
                        height: Dimensions.get("window").height * 0.45,
                        width: Dimensions.get("window").width * 0.95
                    }}
                    data={this.props.navigation.getParam("topic").words}
                    renderItem={this.renderList}
                    keyExtractor={item => item.toString()}
                />
                {this.renderAddButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 10,
        borderWidth: 2,
        borderColor: secondaryColorCore,
        marginHorizontal: 20,
        fontSize: 15
    },
    addButton: {
        width: 200,
        height: 50,
        position: 'absolute',
        bottom: 30,
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

export default OtherCard;