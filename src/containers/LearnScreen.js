import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions, StyleSheet, TouchableOpacity,
} from 'react-native';
import Card from './../components/Card'

class LearnScreen extends Component {
    state = {}

    render() {
        return (
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <View
                    style={{
                        margin: 10,
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: 'gray',
                        padding: 10,
                        width: Dimensions.get("window").width * 0.9,
                    }}>
                    <Text>Title</Text>
                </View>
                <View style={{
                    marginVertical: 20,
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
                <Card></Card>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 20 }}>
                    <TouchableOpacity style={{ borderColor: 'rgb(204, 0, 102)', borderRadius: 5, width: 100, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, }}>
                        <Text>Remembered</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'rgb(204, 0, 102)', borderRadius: 5, width: 100, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, }}>
                        <Text>Forgot</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}


export default LearnScreen;