import React, { useState, useContext } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  DrawerContentScrollView,
  Group,
  DrawerItemList,
  TouchableOpacity,
  DrawerItem,
} from "@react-navigation/drawer";
// import { AuthContext } from "@/context/AuthProvider";
import { Ionicons } from "@expo/vector-icons";

// const [user, setUser] = useContext(AuthContext);

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.navigate("MainStackView")}
      />
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => console.log("logout")} />
    </DrawerContentScrollView>
  );
}
