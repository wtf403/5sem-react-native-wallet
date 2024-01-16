import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet, SafeAreaView } from "react-native";
import { enableScreens } from "react-native-screens";
import Navigation from "@/Navigation";

enableScreens();

export default function App() {
  return <Navigation />;
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
