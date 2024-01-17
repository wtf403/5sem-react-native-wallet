import { createStackNavigator } from "@react-navigation/stack";
import Trade from "@/view/screens/main/trade/Trade";

const Nav = createStackNavigator();
export default function TradeView({ navigation }) {
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
      <Nav.Screen name="Trade" component={Trade} />
    </Nav.Navigator>
  );
}
