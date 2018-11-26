import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions, StyleSheet, TouchableOpacity,
} from 'react-native';
import Card from './../components/Card'
import { secondaryColorCore } from '../style';

class LearnScreen extends Component {
    state = {}

    render() {
        return (
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <View
                    style={{
                        margin: 10,
                        borderWidth: 2,
                        borderRadius: 10,
                        borderColor: 'gray',
                        padding: 10,
                        width: Dimensions.get("window").width * 0.9,
                        borderColor: secondaryColorCore
                    }}>
                    <Text>{this.props.navigation.getParam("topic").title}</Text>
                </View>
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 125,

                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: 'gray',
                    width: Dimensions.get("window").width * 0.3,

                }}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{
                            height: 30,
                            justifyContent: 'center'
                        }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="All" value="All" />
                        <Picker.Item label="Remembered" value="Remembered" />
                        <Picker.Item label="Forgot" value="Forgot" />
                    </Picker>
                </View>
                <Card topic={this.props.navigation.getParam("topic")} />

            </View>
        );
    }
}


export default LearnScreen;