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
                        margin: 10,
                        borderRadius: 10,
                        padding: 5,
                        borderWidth: 2,
                        borderColor: secondaryColorCore,
                        marginHorizontal: 20
                    }}
                    placeholder={'Find title'}

                    underlineColorAndroid={'transparent'}
                />
            </View>
        );
    }
}

export default FindTitle;