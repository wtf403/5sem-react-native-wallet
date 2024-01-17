import { createStackNavigator } from "@react-navigation/stack";
import Start from "@/view/screens/auth/Start";
import ConnectWallet from "@/view/screens/auth/signIn/ConnectWallet";
import Welcome from "@/view/screens/auth/signIn/Welcome";

const SignInStack = createStackNavigator();
export default function SignInView() {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="start" component={Start} />
      <SignInStack.Screen name="connect-wallet" component={ConnectWallet} />
      <SignInStack.Screen name="Welcome" component={Welcome} />
    </SignInStack.Navigator>
  );
}
