import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/screens/tabScreens/HomeScreen";
import {
  Text,
  NavigationContainer,
  TouchableWithoutFeedback,
} from "@react-navigation/native";
import ReceiveScreen from "@/screens/mainScreens/ReceiveScreen";
import SendScreen from "@/screens/mainScreens/SendScreen";

const Home = createStackNavigator();
export default function HomeView({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Home.Navigator
        screenOptions={{
          title: "",
          headerShown: true,
          safeAreaInsets: { top: 0 },
          cardStyle: {
            backgroundColor: "white",
            overflow: "visible",
          },
        }}
      >
        <Home.Screen name="HomeScreen" component={HomeScreen} />
        <Home.Screen name="ReceiveScreen" component={ReceiveScreen} />
        <Home.Screen name="SendScreen" component={SendScreen} />
      </Home.Navigator>
    </NavigationContainer>
  );
}
