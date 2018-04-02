import React, { Component } from 'react';
import {
    SafeAreaView,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Breeds from './screens/breeds';
import BreedImages from './screens/breed-images';
import Favorites from './screens/favorites';

import './config/ReactotronConfig';

const BreedsTab = createStackNavigator({
    Breeds: {
        screen: Breeds,
        navigationOptions: {
            title: 'Breeds',
        },
    },
    BreedImages: {
        screen: BreedImages,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.name,
        }),
    },
});

const FavoritesTab = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favorites',
        },
    },
});

const TabsNavigator = createBottomTabNavigator({
    BreedsTab: {
        screen: BreedsTab,
        navigationOptions: {
            tabBarLabel: 'Breeds',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="paw"
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    FavoritesTab: {
        screen: FavoritesTab,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="star"
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
});

export default TabsNavigator;
