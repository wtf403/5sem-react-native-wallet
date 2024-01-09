import { useMemo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/screens/tabScreens/HomeScreen";
import ReceiveScreen from "@/screens/mainScreens/ReceiveScreen";
import SendScreen from "@/screens/mainScreens/SendScreen";

const Home = createStackNavigator();
export default function HomeView({ navigation }) {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
        title: "",
        presentation: "modal",
      }}
    >
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen
        name="ReceiveScreen"
        component={ReceiveScreen}
        options={({ navigation }) => ({
          header: () => (
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Text>Close</Text>
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <Home.Screen name="SendScreen" component={SendScreen} />
    </Home.Navigator>
  );
}
