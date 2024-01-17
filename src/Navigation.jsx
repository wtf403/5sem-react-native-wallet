import React, { useMemo } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import AuthProvider from "@/context/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import RootStackView from "@/view/screens";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar />
      <AuthProvider>
        <GestureHandlerRootView
          style={{ flex: 1, backgroundColor: "transparent" }}
        >
          <RootStackView />
        </GestureHandlerRootView>
      </AuthProvider>
    </NavigationContainer>
  );
}
