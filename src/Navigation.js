import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

import HomeIcon from "@/assets/HomeIcon.svg";
import CardsIcon from "@/assets/CardsIcon.svg";
import ExchangeIcon from "@/assets/ExchangeIcon.svg";

import Home from "@/screens/tabScreens/Home";
import Cards from "@/screens/tabScreens/Cards";
import Exchange from "@/screens/tabScreens/Exchange";
import Notifications from "@/screens/mainScreens/Notifications";
import Profile from "@/screens/drawerScreens/Profile";
import Settings from "@/screens/drawerScreens/Settings";
import Login from "@/screens/authScreens/Login";
import Register from "@/screens/authScreens/Register";
import Passcode from "@/screens/authScreens/Passcode";
import customDrawerContent from "@/components/drawerContent";

const Tab = createMaterialTopTabNavigator();
const TabView = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            return (
              <HomeIcon
                width={size}
                height={size}
                fill={focused ? color : "gray"}
              />
            );
          } else if (route.name === "Cards") {
            return (
              <CardsIcon
                width={size}
                height={size}
                fill={focused ? color : "gray"}
              />
            );
          } else if (route.name === "Exchange") {
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
      <Tab.Screen name="Home" component={Home} options={{}} />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Exchange" component={Exchange} />
    </Tab.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const MainStackView = () => {
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
              onPress={() => navigation.navigate("Notifications")}
              title="Notifications"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          presentation: "modal",
        }}
      />
    </MainStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerView = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => customDrawerContent(props)}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name="MainStackView"
        component={MainStackView}
        options={{
          headerShown: false,
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const SignInStack = createStackNavigator();
const SignInView = () => {
  return (
    <SignInStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </SignInStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthView = () => {
  return (
    <AuthStack.Navigator>
      <SignInStack.Screen name="Passcode" component={Passcode} />
      <SignInStack.Screen name="SignInView" component={SignInView} />
    </AuthStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackView = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="DrawerView"
        component={DrawerView}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="AuthView"
        component={AuthView}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStackView />
    </NavigationContainer>
  );
}
