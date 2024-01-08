import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeView from "@/navigation/home";
import CardsView from "@/navigation/cards";
import ExchangeView from "@/navigation/exchange";

import HomeIcon from "@/assets/HomeIcon.svg";
import CardsIcon from "@/assets/CardsIcon.svg";
import ExchangeIcon from "@/assets/ExchangeIcon.svg";

const Tab = createMaterialTopTabNavigator();
export default function TabView() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarContentContainerStyle: {
          gap: 4,
        },
        tabBarItemStyle: {
          flexDirection: "row",
          gap: 4,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "purple",
          height: 4,
          borderRadius: 4,
        },
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeView") {
            return (
              <HomeIcon
                width={size}
                height={size}
                fill={focused ? color : "gray"}
              />
            );
          } else if (route.name === "CardsView") {
            return (
              <CardsIcon
                width={size}
                height={size}
                fill={focused ? color : "gray"}
              />
            );
          } else if (route.name === "ExchangeView") {
            return (
              <ExchangeIcon
                width={size}
                height={size}
                fill={focused ? color : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="HomeView"
        component={HomeView}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="CardsView"
        component={CardsView}
        options={{ title: "Cards" }}
      />
      <Tab.Screen
        name="ExchangeView"
        component={ExchangeView}
        options={{ title: "Exchange" }}
      />
    </Tab.Navigator>
  );
}
