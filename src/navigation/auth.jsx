import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/screens/authScreens/LoginScreen";
import RegisterScreen from "@/screens/authScreens/RegisterScreen";
import PasscodeScreen from "@/screens/authScreens/PasscodeScreen";

const SignInStack = createStackNavigator();
const SignInView = () => {
  return (
    <SignInStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </SignInStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
export default function AuthView() {
  return (
    <AuthStack.Navigator>
      <SignInStack.Screen name="PasscodeScreen" component={PasscodeScreen} />
      <SignInStack.Screen name="SignInView" component={SignInView} />
    </AuthStack.Navigator>
  );
}
