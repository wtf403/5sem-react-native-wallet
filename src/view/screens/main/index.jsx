import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "@/view/screens/main/Notifications";
import HubView from "@/view/screens/main/hub";
import AssetsView from "@/view/screens/main/assets";
import PayView from "@/view/screens/main/pay";
import ExploreView from "@/view/screens/main/explore";
import TradeView from "@/view/screens/main/trade";

const Tab = createBottomTabNavigator();
const TabView = () => {
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
        headerShown: false,
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   if (route.name === "HomeView") {
        //     return (
        //       <HomeIcon
        //         width={size}
        //         height={size}
        //         fill={focused ? color : "gray"}
        //       />
        //     );
        //   } else if (route.name === "CardsView") {
        //     return (
        //       <CardsIcon
        //         width={size}
        //         height={size}
        //         fill={focused ? color : "gray"}
        //       />
        //     );
        //   } else if (route.name === "ExchangeView") {
        //     return (
        //       <ExchangeIcon
        //         width={size}
        //         height={size}
        //         fill={focused ? color : "gray"}
        //       />
        //     );
        //   }
        // },
      })}
    >
      <Tab.Screen name="hub" component={HubView} />
      <Tab.Screen name="assets" component={AssetsView} />
      <Tab.Screen name="pay" component={PayView} />
      <Tab.Screen name="explore" component={ExploreView} />
      <Tab.Screen name="trade" component={TradeView} />
    </Tab.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
export default function MainStackView() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="TabView"
        component={TabView}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <Button onPress={() => navigation.toggleDrawer()} title="Open" />
          ),
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("notifications")}
              title="Notifications"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="notifications"
        component={Notifications}
        options={({ navigation }) => ({
          title: "Notifications",
        })}
      />
    </MainStack.Navigator>
  );
}
