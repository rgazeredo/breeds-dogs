import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderButtonFavorite extends Component {
    render() {
        console.tron.log(this.props);
        return(
            <TouchableOpacity 
                style={styles.container}>
                <Icon 
                    name="star"
                    size={26}
                    />
            </TouchableOpacity>
        )
    }
}
