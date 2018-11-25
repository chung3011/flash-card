import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, TouchableOpacity, TextInput
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

class WordForm extends Component {
    state = {}
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{
                        borderWidth: 2,
                        borderColor: primaryColorCore,
                        width: 100,
                        marginVertical: 15,
                        marginRight: 20,
                        borderRadius: 10,
                        padding:10
                    }}
                    >{this.props.item.word}</Text>
                    <Text style={{
                        borderWidth: 2,
                        borderColor: primaryColorCore,
                        width: 100,
                        marginVertical: 15,
                        borderRadius: 10,
                        padding:10
                    }}
                    >{this.props.item.mean}</Text>
                </View>
            </View>

        );
    }
}

export default WordForm;