import React, { Component } from 'react';
import {
    Text, Picker,
    View, Dimensions,
} from 'react-native';
import { primaryColorCore, secondaryColorCore } from '../style';


class PickLanguage extends Component {
    state = {}

    handleLangChange = () => {
        var lang = this.state.language;
        this.props.onSelectLanguage(lang);
    }

    render() {
        return (
            <View style={{
                marginHorizontal: 30,
                marginBottom: 20,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: secondaryColorCore
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