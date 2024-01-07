import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/tabScreens/Home";
import CardsScreen from "@/screens/tabScreens/Cards";
import ExchangeScreen from "@/screens/tabScreens/Exchange";
import HomeIcon from "@/assets/HomeIcon.svg";
import CardsIcon from "@/assets/CardsIcon.svg";
import ExchangeIcon from "@/assets/ExchangeIcon.svg";
import DrawerScreen from "@/navigation/drawer";
import { styles } from "@/utils/constants";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerLeft: (props) => (
          <TouchableOpacity
            {...props}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Text>Open notification</Text>
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color, focused, size }) => {
          if (route.name === "Home") {
            return (
              <HomeIcon
                width={size}
                height={size}
                fill={focused ? styles.accentColor : "gray"}
              />
            );
          }
          if (route.name === "Cards") {
            return (
              <CardsIcon
                width={size}
                height={size}
                fill={focused ? styles.accentColor : "gray"}
              />
            );
          }
          if (route.name === "Exchange") {
            return (
              <ExchangeIcon
                width={size}
                height={size}
                fill={focused ? styles.accentColor : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarActiveTintColor: styles.accentColor,
          title: "Home",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: styles.accentColor,
          title: "Cards",
        }}
        name="Cards"
        component={CardsScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: styles.accentColor,
          title: "Exchange",
        }}
        name="Exchange"
        component={ExchangeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
