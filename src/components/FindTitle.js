import React, { Component } from 'react';
import {
    Text, TextInput,
    View,
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';


class FindTitle extends Component {
    state = {}

    handleTitleChange = (itemValue) => {
        this.setState({ text: itemValue })
        this.props.onSelectTitle(itemValue);
    }

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
                    onChangeText={(text) => this.handleTitleChange(text)}
                    value={this.state.text}

                    underlineColorAndroid={'transparent'}
                />
            </View>
        );
    }
}

export default FindTitle;