import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import BreedItem from '../breeds/components/breed-item';
import API from '../../services';
import styles from './styles';

export default class Breeds extends Component {

    state = {
        breeds: [],
        loading: false,
    };

    componentDidMount() {
        this.setState({ loading: true });

        this.getBreeds().then(() => {
            this.setState({ loading: false });
        });
    }

    getBreeds = async () => {
        const response = await API.get(`/breeds`);

        this.setState({ breeds: response.data, loading: false });
    }

    renderBreeds = () => (
        <FlatList
            data={this.state.breeds}
            keyExtractor={index => index}
            renderItem={({ item }) => (<BreedItem name={item} navigation={this.props.navigation} />)}
        />
    );

    renderList = () => (
        this.state.breeds.length
        ? this.renderBreeds()
        : <Text style={styles.empty}>No breed found</Text>
    );

    render() {
        return (
            <ScrollView>
                <SafeAreaView>
                    { this.state.loading
                    ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
                    : this.renderList()
                    }
                </SafeAreaView>
            </ScrollView>
        );
    }
}
