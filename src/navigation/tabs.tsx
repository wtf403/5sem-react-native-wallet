import React from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "@/screens/Home";
import CardsScreen from "@/screens/Cards";
import ExchangeScreen from "@/screens/Exchange";
import HomeIcon from "@/assets/HomeIcon.svg";
import CardsIcon from "@/assets/CardsIcon.svg";
import ExchangeIcon from "@/assets/ExchangeIcon.svg";
import { styles } from "@/utils/constants";

const Tab = createMaterialTopTabNavigator();

const TabBar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: styles.accentColor,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={100}
              height={100}
              fill={focused ? styles.accentColor : "gray"}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: styles.accentColor,
          title: "Cards",
          tabBarIcon: ({ focused }) => (
            <CardsIcon
              width={100}
              height={100}
              fill={focused ? styles.accentColor : "gray"}
            />
          ),
        }}
        name="Cards"
        component={CardsScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: styles.accentColor,
          title: "Exchange",
          tabBarIcon: ({ focused }) => (
            <ExchangeIcon
              width={100}
              height={100}
              fill={focused ? styles.accentColor : "gray"}
            />
          ),
        }}
        name="Exchange"
        component={ExchangeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
