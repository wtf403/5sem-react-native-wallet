import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerView from "@/navigation/drawer";
import AuthView from "@/navigation/auth";

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
