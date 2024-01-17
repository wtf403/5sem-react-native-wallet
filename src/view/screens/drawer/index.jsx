import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackView from "@/view/screens/main/index";
import ProfileScreen from "@/view/screens/drawer/Profile";
import SettingsScreen from "@/view/screens/drawer/Settings";

import { useWindowDimensions } from "react-native";
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

const Drawer = createDrawerNavigator();
export default function DrawerView() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="Close"
            onPress={() => props.navigation.navigate("MainStackView")}
          />
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => console.log("logout")} />
        </DrawerContentScrollView>;
      }}
      screenOptions={{
        drawerType: dimensions.width >= 1024 ? "permanent" : "front",
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
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
