import { createStackNavigator } from "@react-navigation/stack";
import Passcode from "@/view/screens/auth/Passcode";
import Start from "@/view/screens/auth/Start";
import SignInView from "@/view/screens/auth/signIn";
import SignUpView from "@/view/screens/auth/signUp";

const SignStack = createStackNavigator();
const SignView = () => {
  return (
    <SignStack.Navigator>
      <SignView.Screen name="SignInView" component={SignInView} />
      <SignView.Screen name="SignUpView" component={SignUpView} />
    </SignStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
export default function AuthView() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="start" component={Start} />
      <AuthStack.Screen name="passcode" component={Passcode} />
    </AuthStack.Navigator>
  );
}
