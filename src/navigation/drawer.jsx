import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackView from "@/navigation/main";
import ProfileScreen from "@/screens/drawerScreens/ProfileScreen";
import SettingsScreen from "@/screens/drawerScreens/SettingsScreen";
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
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
