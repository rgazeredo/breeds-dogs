import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import BreedItemImages from '../breed-images/components/breed-item-images';
import HeaderButtonFavorite from './components/header-button-favorite';
import API from '../../services';
import styles from './styles';

export default class BreedImages extends Component {
    static navigationOptions = {
        headerRight: (props) => (<HeaderButtonFavorite {...props} />)
    };

    state = {
        images: [],
        loading: false,
    };

    saveFavorite() {
        console.tron.log('saveFavorite');
    }

    getImages = async () => {
        let name = this.props.navigation.state.params.name.toLowerCase();

        const response = await API.get(`/${name}/images`);

        this.setState({ images: response.data });
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.getImages().then(() => {
            this.setState({ loading: false });
        });
    }

    renderImages = () => (
        <FlatList
            data={this.state.images}
            keyExtractor={index => index}
            renderItem={({ item }) => (<BreedItemImages url={item} navigation={this.props.navigation} />)}
        />
    );

    renderList = () => (
        this.state.images.length
        ? this.renderImages()
        : <Text style={styles.empty}>No image found</Text>
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
