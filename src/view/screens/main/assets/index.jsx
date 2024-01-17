import { createStackNavigator } from "@react-navigation/stack";
import Assets from "@/view/screens/main/assets/Assets";

const Nav = createStackNavigator();
export default function AssetsView({ navigation }) {
  return (
    <Nav.Navigator
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
      <Nav.Screen name="Assets" component={Assets} />
    </Nav.Navigator>
  );
}
