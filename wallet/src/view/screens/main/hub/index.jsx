import { createStackNavigator } from "@react-navigation/stack";
import Hub from "@/view/screens/main/hub/Hub";

const Nav = createStackNavigator();
export default function HubView({ navigation }) {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
        safeAreaInsets: { top: 0 },
        cardStyle: {
          backgroundColor: "white",
          overflow: "visible",
        },
      }}
    >
      <Nav.Screen name="Hub" component={Hub} />
    </Nav.Navigator>
  );
}
