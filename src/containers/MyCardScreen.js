import React, { Component } from 'react';
import {
    Text, FlatList, StyleSheet,
    View, Dimensions, TouchableOpacity
} from 'react-native';

import firebase from 'react-native-firebase';

import FindTitle from '../components/FindTitle';
import PickLanguage from '../components/PickLanguage';
import Topic from '../components/Topic';
import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'


class MyCardScreen extends Component {
    state = {
        boxFilter: this.props.box,
    }

    renderItem = (data) => {
        return <Topic
            screen={'Topics'}
            item={data.item}
            navigation={this.props.navigation} />
    }

    handleFindTitle = (titleValue) => {
        let boxFilter = this.props.box.filter(item => item.title == titleValue)
        this.setState({ boxFilter: boxFilter.length == 0 ? this.props.box : boxFilter });
    }

    handleLanguage = (langValue) => {
        let boxLanguageFilter = this.props.box.filter(item => item.language == langValue)
        this.setState({
            boxFilter: langValue == 'All' ? this.props.box : boxLanguageFilter
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
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: 20,

                    }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Discovery', {
                        listUserUid: this.props.navigation.getParam('listUserUid')
                    })}>
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


const mapStateToProps = ({ box }) => ({ box })
export default connect(mapStateToProps)(MyCardScreen);
