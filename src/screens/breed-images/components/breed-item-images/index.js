import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

export default class BreedItemImages extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.url }}
                />
            </View>
        )
    }
}
