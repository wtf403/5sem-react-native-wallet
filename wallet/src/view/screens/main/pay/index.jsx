import { createStackNavigator } from "@react-navigation/stack";
import Pay from "@/view/screens/main/pay/Pay";
import TopUp from "@/view/screens/main/pay/topUp/TopUp";
import Swap from "@/view/screens/main/pay/swap/Swap";
import Bridge from "@/view/screens/main/pay/bridge/Bridge";
import Send from "@/view/screens/main/pay/send/Send";
import Receive from "@/view/screens/main/pay/receive/Receive";

const Nav = createStackNavigator();
export default function PayView({ navigation }) {
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
      <Nav.Screen name="pay" component={Pay} />
      <Nav.Screen name="top-up" component={TopUp} />
      <Nav.Screen name="swap" component={Swap} />
      <Nav.Screen name="bridge" component={Bridge} />
      <Nav.Screen name="send" component={Send} />
      <Nav.Screen name="receive" component={Receive} />
    </Nav.Navigator>
  );
}
