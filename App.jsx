import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "@/navigation/tabs";
import Header from "@/components/Header";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Header />
        <TabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

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
