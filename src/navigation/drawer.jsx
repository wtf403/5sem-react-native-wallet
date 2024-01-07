import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/drawerScreens/Profile";
import Settings from "../screens/drawerScreens/Settings";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="UserMainInfo">
      <Drawer.Screen
        options={{
          headerTitle: "",
          title: "Profile",
        }}
        name="UserMainInfo"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          headerTitle: "",
          title: "Settings",
        }}
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
