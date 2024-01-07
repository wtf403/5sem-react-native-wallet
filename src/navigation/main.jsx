import Notifications from "@/screens/Notifications";
import TabNavigator from "@/navigation/tabs";
import DrawerNavigator from "@/navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
