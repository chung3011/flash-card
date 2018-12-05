import React, { Component } from 'react';
import {
    Text, Picker, FlatList, StyleSheet,
    View, Dimensions, TouchableOpacity,
} from 'react-native';
import Card from './../components/Card'
import { secondaryColorCore, primaryColorCore } from '../style';
import { connect } from 'react-redux'

class LearnScreen extends Component {
    state = {
        wordsFilter: []
    }

    componentWillMount() {
        this.setState({
            wordsFilter: this.props.box.filter(item => item.date == this.props.navigation.getParam("topic").date)[0].words
        })
    }

    _onStatusChange(itemValue) {
        let topic = this.props.box.filter(item => item.date == this.props.navigation.getParam("topic").date)
        let wordsFilter = topic[0].words.filter(item => item.status == itemValue)
        this.setState({
            wordsFilter: itemValue == 'All'
                ? topic[0].words
                : wordsFilter,
            status: itemValue,
            reload: true
        })

    }

    reloadButton = () => {
        this.setState({ reload: false })
    }

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
                    <Text style={{ fontSize: 18, color: 'black' }}>{this.props.navigation.getParam("topic").title}</Text>
                </View>
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 100,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: 'gray',
                    width: Dimensions.get("window").width * 0.5,

                }}>
                    <Picker
                        selectedValue={this.state.status}
                        style={{
                            height: 30,
                            justifyContent: 'center'
                        }}
                        onValueChange={(itemValue, itemIndex) => this._onStatusChange(itemValue)}>
                        <Picker.Item label="All" value="All" />
                        <Picker.Item label="Memorized" value={true} />
                        <Picker.Item label="Forgot" value={false} />
                    </Picker>
                </View>
                {this.state.reload
                    ? <TouchableOpacity
                        style={[styles.reload]}
                        onPress={this.reloadButton}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>List card</Text>
                    </TouchableOpacity>
                    : <Card
                        topic={this.props.navigation.getParam("topic")}
                        words={this.state.wordsFilter}
                        status={this.state.status}
                    />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    meanText: {
        color: 'rgb(41, 41, 61)',
        fontSize: 30,
        fontWeight: 'bold',
    },
    reload: {
        backgroundColor: secondaryColorCore,
        borderRadius: 5,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120,
    }
})

const mapStateToProps = ({ box }) => ({ box })
export default connect(mapStateToProps)(LearnScreen);