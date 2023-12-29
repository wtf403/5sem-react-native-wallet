import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import Navigator from "./src/navigation/root";

export default function App() {
  return (
      <NavigationContainer>
        <Navigator />
        <StatusBar/>
      </NavigationContainer>
  );
}
