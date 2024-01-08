import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationsScreen from "@/screens/mainScreens/NotificationsScreen";
import TabView from "@/navigation/tabs";

const MainStack = createNativeStackNavigator();
export default function MainStackView() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="TabView"
        component={TabView}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <Button onPress={() => navigation.toggleDrawer()} title="Open" />
          ),
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("NotificationsScreen")}
              title="Notifications"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </MainStack.Navigator>
  );
}
