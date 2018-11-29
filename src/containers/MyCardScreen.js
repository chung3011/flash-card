import React, { Component } from 'react';
import {
    Text, FlatList,
    View, Dimensions, TouchableOpacity
} from 'react-native';

import firebase from 'react-native-firebase';

import FindTitle from '../components/FindTitle';
import PickLanguage from '../components/PickLanguage';
import Topic from '../components/Topic';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';



class MyCardScreen extends Component {
    state = {
        box: [],
        boxFilter: []
    }


    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child('box')
            .on('value', res => {
                this.setState({
                    box: res._value != null ? res._value : [],
                    boxFilter: res._value != null ? res._value : [],
                })
            })
    }

    renderItem = (data) => {
        return <Topic
            screen={'Topics'}
            item={data.item}
            navigation={this.props.navigation} />
    }

    handleFindTitle = (titleValue) => {
        let boxFilter = this.state.box.filter(item => item.title == titleValue)
        this.setState({ boxFilter: boxFilter.length == 0 ? this.state.box : boxFilter });
    }

    handleLanguage = (langValue) => {
        let boxLanguageFilter = this.state.box.filter(item => item.language == langValue)
        this.setState({
            lang: langValue,
            boxFilter: boxLanguageFilter
        });
    }

    render() {
        return (
            <View>
                <FindTitle onSelectTitle={this.handleFindTitle} />
                <PickLanguage
                    onSelectLanguage={this.handleLanguage}
                    screen={"find"}
                />
                <FlatList
                    style={{ flexGrow: 0, height: Dimensions.get("window").height * 0.60 }}
                    data={this.state.boxFilter}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.toString()}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Discovery')}>
                        <Icon name="globe" size={40} color={secondaryColorCore} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard')}>
                        <Icon name="plus-circle" size={40} color={secondaryColorCore} />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
export default MyCardScreen;
