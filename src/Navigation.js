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

import HomeScreen from "@/screens/tabScreens/HomeScreen";
import CardsScreen from "@/screens/tabScreens/CardsScreen";
import ExchangeScreen from "@/screens/tabScreens/ExchangeScreen";
import NotificationsScreen from "@/screens/mainScreens/NotificationsScreen";
import ProfileScreen from "@/screens/drawerScreens/ProfileScreen";
import SettingsScreen from "@/screens/drawerScreens/SettingsScreen";
import LoginScreen from "@/screens/authScreens/LoginScreen";
import RegisterScreen from "@/screens/authScreens/RegisterScreen";
import PasscodeScreen from "@/screens/authScreens/PasscodeScreen";
import CustomDrawerContent from "@/components/DrawerContent";

import ReceiveScreen from "@/screens/mainScreens/homeScreens/ReceiveScreen";
import SendScreen from "@/screens/mainScreens/homeScreens/SendScreen";

import CardDetailsScreen from "@/screens/mainScreens/cardsScreens/CardDetailsScreen";

const Home = createStackNavigator();
const HomeView = ({ navigation }) => {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
        title: "",
      }}
    >
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen
        name="ReceiveScreen"
        component={ReceiveScreen}
        options={({ navigation }) => ({
          title: "",
          presentation: "modal",
          header: () => (
            <View>
              <Button onPress={() => navigation.goBack()} title="Close" />
            </View>
          ),
        })}
      />
      <Home.Screen
        name="SendScreen"
        component={SendScreen}
        options={{
          presentation: "modal",
          headerLeft: () => {
            <Button onPress={() => navigation.goBack()} title="Close" />;
          },
        }}
      />
    </Home.Navigator>
  );
};

const Cards = createStackNavigator();
const CardsView = () => {
  return (
    <Cards.Navigator>
      <Cards.Screen name="CardsScreen" component={CardsScreen} />
      <Cards.Screen
        name="CardDetailsScreen"
        component={CardDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Cards.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();
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
          } else if (route.name === "ExchangeScreen") {
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
        name="ExchangeScreen"
        component={ExchangeScreen}
        options={{ title: "Exchange" }}
      />
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
              onPress={() => navigation.navigate("NotificationsScreen")}
              title="Notifications"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
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
      drawerContent={(props) => CustomDrawerContent(props)}
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
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const SignInStack = createStackNavigator();
const SignInView = () => {
  return (
    <SignInStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </SignInStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthView = () => {
  return (
    <AuthStack.Navigator>
      <SignInStack.Screen name="PasscodeScreen" component={PasscodeScreen} />
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
