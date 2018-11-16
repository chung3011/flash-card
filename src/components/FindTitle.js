import React, { Component } from 'react';
import {
    Text, TextInput,
    View,
} from 'react-native';

class FindTitle extends Component {
    state = {}
    render() {
        return (
            <View>
                <TextInput
                    style={{
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: 'gray',
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