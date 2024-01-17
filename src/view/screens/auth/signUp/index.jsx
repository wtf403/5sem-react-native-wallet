import { createStackNavigator } from "@react-navigation/stack";
import Start from "@/view/screens/auth/Start";
import TakePen from "@/view/screens/auth/signUp/TakePen";
import PrivateKey from "@/view/screens/auth/signUp/PrivateKey";
import CheckPrivateKey from "@/view/screens/auth/signUp/CheckPrivateKey";
import Protect from "@/view/screens/auth/signUp/Protect";
import Congratulations from "@/view/screens/auth/signUp/Congratulations";

const SignInStack = createStackNavigator();
export default function SignInView() {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="start" component={Start} />
      <SignInStack.Screen name="take-pen" component={TakePen} />
      <SignInStack.Screen name="private-key" component={PrivateKey} />
      <SignInStack.Screen
        name="check-private-key"
        component={CheckPrivateKey}
      />
      <SignInStack.Screen
        name="pincode"
        component={
          <Pincode
            title="Set PIN"
            subtitle="Create a password to enter 
the application and perform operations."
          />
        }
      />
      <SignInStack.Screen name="protect" component={Protect} />
      <SignInStack.Screen name="congratulations" component={Congratulations} />
    </SignInStack.Navigator>
  );
}
