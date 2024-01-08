import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet, SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "@/context/AuthProvider";
import Navigation from "@/navigation/root";
// import Navigation from "@/Navigation";

enableScreens();

export default function App() {
  return <Navigation />;
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
