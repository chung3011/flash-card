import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, TouchableOpacity, Alert
} from 'react-native';
import { primaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux'
import { addTopic } from '../actions'

class TopicDiscovery extends Component {
    state = {
    }

    addCard = () => {
        let topicExist = this.props.box.filter(item => item.dateUserAuth == this.props.item.date
            && item.userUid == this.props.item.userUid)
        if (topicExist.length !== 0) {
            return Alert.alert('Topic added!')
        }
        this.props.addTopic({
            language: this.props.item.language,
            title: this.props.item.title,
            words: this.props.item.words,
            userUid: this.props.item.userUid,
            dateUserAuth: this.props.item.date
        })
        Alert.alert('Add topic completed')
    }


    _onPressOwnCard = () => {
        this.props.navigation.navigate('OtherCard', {
            topic: this.props.item,
        })
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
                                : this.props.item.like.length}
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

const mapStateToProps = ({ box }) => ({ box })
export default connect(mapStateToProps, { addTopic })(TopicDiscovery);