import React, { Component } from 'react';
import {
    Text,
    View, Dimensions, StyleSheet, TouchableOpacity
} from 'react-native';
import FlipCard from 'react-native-flip-card'
import { primaryColorCore } from '../style';

import firebase from 'react-native-firebase';

import { connect } from 'react-redux'
import { updateStatusWordTopic } from '../actions'

class Flip extends Component {
    state = {
        status: this.props.item.status
    }

    memorizedButton = () => {
        this.props.updateStatusWordTopic({
            date: this.props.topic.date,
            word: this.props.item.word,
            status: !this.state.status
        })
        this.setState({ status: !this.state.status })
    }


    render() {
        return (
            <View key={this.props.item.status} style={styles.slide1}>
                <FlipCard
                    style={{
                        width: Dimensions.get("window").width - 30,
                        height: Dimensions.get("window").width - 30,
                        marginHorizontal: 15
                    }}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                >
                    <View style={styles.face}>
                        <Text style={styles.text} >{this.props.item.word}</Text>
                        <TouchableOpacity
                            style={[
                                styles.memorized,
                                {
                                    backgroundColor: this.state.status ? primaryColorCore : 'gray'

                                }]}
                            onPress={this.memorizedButton}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Memorized</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.face}>
                        <Text style={styles.meanText} >{this.props.item.mean}</Text>
                        <TouchableOpacity
                            style={[
                                styles.memorized,
                                {
                                    backgroundColor: this.state.status ? primaryColorCore : 'gray'
                                }]}
                            onPress={this.memorizedButton}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Memorized</Text>
                        </TouchableOpacity>
                    </View>
                </FlipCard>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'rgb(204, 0, 102)',
        fontSize: 30,
        fontWeight: 'bold',
    },
    face: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    meanText: {
        color: 'rgb(41, 41, 61)',
        fontSize: 30,
        fontWeight: 'bold',
    },
    memorized: {
        borderRadius: 5,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    }
})

export default connect(null, { updateStatusWordTopic })(Flip);