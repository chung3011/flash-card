import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, TouchableOpacity, Alert
} from 'react-native';
import { primaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';

class TopicDiscovery extends Component {
    state = {
        myLike: [],
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

    addCard = () => {
        let topicExist = this.state.box.filter(item => item.dateUserAuth == this.props.item.date
            && item.userUid == this.props.item.userUid)
        if (topicExist.length !== 0) {
            return Alert.alert('Topic added!')
        }
        this.state.box.unshift({
            language: this.props.item.language,
            learn: 0,
            point: 0,
            date: Date.now(),
            title: this.props.item.title,
            dateUserAuth: this.props.item.date,
            userUid: this.props.item.userUid,
            words: this.props.item.words
        })
        firebase.database().ref('/users')
            .child(firebase.auth().currentUser.uid)
            .child('box')
            .set(this.state.box)
        Alert.alert('Add topic completed')
    }

    // handleUpdateMyLike = (myLikeValue) => {
    //     this.setState({ myLike: myLikeValue });
    // }

    _onPressOwnCard = () => {
        this.props.navigation.navigate('OtherCard', {
            topic: this.props.item,
        })
        // this.props.onReloadBox()
    }


    render() {

        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={this._onPressOwnCard}
                >
                    <View style={styles.header}>
                        <Text style={styles.language}>{this.props.item.language}</Text>
                        <TouchableOpacity
                            onPress={this.addCard}>
                            <Icon
                                style={{ marginEnd: 5, alignSelf: 'flex-end' }}
                                name="plus-circle" size={27} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.topic}>{this.props.item.title}</Text>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <View style={styles.flexRow}>
                        <Icon style={{ marginEnd: 5 }} name="heart" size={17} />
                        <Text style={{ width: 25 }}>
                            {this.props.item.like == null
                                ? 0
                                : this.props.item.like.length + this.state.myLike.length}
                        </Text>
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
export default TopicDiscovery;