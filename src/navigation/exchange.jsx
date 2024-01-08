import { createStackNavigator } from "@react-navigation/stack";
import ExchangeScreen from "@/screens/tabScreens/ExchangeScreen";
import SelectTokenScreen from "@/screens/mainScreens/SelectTokenScreen";

const Exchange = createStackNavigator();
export default function HomeView({ navigation }) {
  return (
    <Exchange.Navigator
      screenOptions={{
        headerShown: false,
        title: "",
        presentation: "modal",
      }}
    >
      <Exchange.Screen name="ExchangeScreen" component={ExchangeScreen} />
      <Exchange.Screen
        name="SelectTokenScreen"
        component={SelectTokenScreen}
        options={({ navigation }) => ({
          title: "Select Token",
          header: () => (
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Text>Close</Text>
            </TouchableWithoutFeedback>
          ),
        })}
      />
    </Exchange.Navigator>
  );
}
