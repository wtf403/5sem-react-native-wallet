import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../screens/Home';
import CardsScreen from '../screens/Cards';
import ExchangeScreen from '../screens/Exchange';
// import HomeIcon from '../assets/HomeIcon.svg';
import { styles } from '../utils/constants'

const Tab = createMaterialTopTabNavigator();


const TabBar: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: styles.accentColor,
                    title: 'Home',
                    }}
                name="Home"
                component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: styles.accentColor,
                    title: 'Cards',
                }}
                name="Cards"
                component={CardsScreen} />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: styles.accentColor,
                    title: 'Exchange',
                }}
                name="Exchange"
                component={ExchangeScreen} />
        </Tab.Navigator>
    );
}

export default TabBar;
