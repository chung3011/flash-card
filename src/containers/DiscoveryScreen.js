import React, { Component } from 'react';
import {
    Text,
    View,FlatList,StyleSheet,Dimensions,TouchableOpacity
} from 'react-native';
import FindTitle from '../components/FindTitle';
import PickLanguage from '../components/PickLanguage';
import TopicDiscovery from '../components/TopicDiscovery';

import { primaryColorCore, secondaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
    {
        language: 'English',
        title: 'animal'
    },
    {
        language: 'Japanese',
        title: 'gain'
    },
    {
        language: 'Tuckey',
        title: 'sport'
    },
    {
        language: 'Japanese',
        title: 'gain'
    },
    {
        language: 'Tuckey',
        title: 'sport'
    },
    {
        language: 'Japanese',
        title: 'gain'
    },
    {
        language: 'Tuckey',
        title: 'sport'
    },

]

class DiscoveryScreen extends Component {
    state = {}

    renderItem = (data) => {
        return <TopicDiscovery item={data.item} />
    }

    render() {
        return (
            <View>
                <FindTitle />
                <PickLanguage />
                <FlatList
                    style={{ flexGrow: 0, height: Dimensions.get("window").height * 0.63 }}
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.toString()}
                />
                <View style={{marginVertical:20,alignItems:'center'}}>
                    <TouchableOpacity>
                        <Icon name="user-circle" size={50} color={secondaryColorCore} />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width - 60,
      borderRadius: 10,
      marginHorizontal: 30,
      marginVertical: 10,
      borderWidth: 2,
      borderColor: primaryColorCore
    },
    header: {
      backgroundColor: primaryColorCore,
      padding: 10,
      flexDirection: 'row',
    },
    language: {
      fontSize: 14,
      color: '#f2f2f2',
      flex: 1
    },
    topic: {
      fontSize: 20,
      margin: 10,
      color: '#262626'
    },
    bottom: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 8
    },
    flexRow: {
      flexDirection: 'row',
    }
  })

export default DiscoveryScreen;