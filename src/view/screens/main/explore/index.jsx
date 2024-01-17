import { createStackNavigator } from "@react-navigation/stack";
import Explore from "@/view/screens/main/explore/Explore";

const Nav = createStackNavigator();
export default function ExploreView({ navigation }) {
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
      <Nav.Screen name="Explore" component={Explore} />
    </Nav.Navigator>
  );
}
