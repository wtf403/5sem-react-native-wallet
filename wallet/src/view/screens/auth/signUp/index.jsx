import { createStackNavigator } from "@react-navigation/stack";
import Start from "@/view/screens/auth/Start";
import TakePen from "@/view/screens/auth/signUp/TakePen";
import PrivateKey from "@/view/screens/auth/signUp/PrivateKey";
import CheckPrivateKey from "@/view/screens/auth/signUp/CheckPrivateKey";
import Protect from "@/view/screens/auth/signUp/Protect";
import Congratulations from "@/view/screens/auth/signUp/Congratulations";

const SignUpStack = createStackNavigator();
export default function SignUpView() {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen name="start" component={Start} />
      <SignUpStack.Screen name="take-pen" component={TakePen} />
      <SignUpStack.Screen name="private-key" component={PrivateKey} />
      <SignUpStack.Screen
        name="check-private-key"
        component={CheckPrivateKey}
      />
      <SignUpStack.Screen
        name="pincode"
        component={
          <Pincode
            title="Set PIN"
            subtitle="Create a password to enter 
the application and perform operations."
          />
        }
      />
      <SignUpStack.Screen name="protect" component={Protect} />
      <SignUpStack.Screen name="congratulations" component={Congratulations} />
    </SignUpStack.Navigator>
  );
}
