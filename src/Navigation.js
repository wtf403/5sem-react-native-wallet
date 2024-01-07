import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "@/navigation/tabs";
import Notifications from "@/screens/Notifications";
import DrawerScreen from "@/navigation/drawer";

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="TabBar"
      component={TabBar}
      options={{
        headerShown: false,
      }}
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

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
