import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions,
} from 'react-native';

class PickLanguage extends Component {
    state = {}
    render() {
        return (
            <View style={{
                marginHorizontal: 30,
                marginBottom: 20,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: 'gray'
            }}>
                <Picker
                    selectedValue={this.state.language}
                    style={{
                        height: 30,
                        width: Dimensions.get("window").width - 60,
                    }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="Japanese" value="Japanese" />
                    <Picker.Item label="Korean" value="Korean" />
                </Picker>
            </View>
        );
    }
}

export default PickLanguage;