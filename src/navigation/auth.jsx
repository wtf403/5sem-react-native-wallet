import { createStackNavigator } from "@react-navigation/stack";
import Passcode from "@/screens/authScreens/Passcode";
import TermsAndConditions from "@/screens/authScreens/TermsAndConditions";

const Stack = createStackNavigator();

const NotificationsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="Passcode" component={Passcode} />
    </Stack.Navigator>
  );
};

export default NotificationsNavigator;
