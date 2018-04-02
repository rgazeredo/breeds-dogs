import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class BreedItem extends Component {
    render() {
        let name = this.props.name.slice(0,1).toUpperCase() + this.props.name.slice(1, this.props.name.length);
        
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => {this.props.navigation.navigate('BreedImages', { name })}}
                    >
                    <Text>{name}</Text>
                    <Icon 
                        name="chevron-circle-right"
                        size={18}
                        />
                </TouchableOpacity>
            </View>
        )
    }
}
