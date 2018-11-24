import React, { Component } from 'react';
import {
    Text, TextInput,
    View,
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';


class FindTitle extends Component {
    state = {}
    render() {
        return (
            <View>
                <TextInput
                    style={{
                        margin: 15,
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: secondaryColorCore,
                        padding: 10
                    }}
                    placeholder={'Find title'}

                    underlineColorAndroid={'transparent'}
                />
            </View>
        );
    }
}

export default FindTitle;