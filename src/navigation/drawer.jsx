import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackView from "@/navigation/main";
import ProfileScreen from "@/screens/drawerScreens/ProfileScreen";
import SettingsScreen from "@/screens/drawerScreens/SettingsScreen";
import CustomDrawerContent from "@/components/DrawerContent";
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();
export default function DrawerView() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => CustomDrawerContent(props)}
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
