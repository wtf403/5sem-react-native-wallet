import { createStackNavigator } from "@react-navigation/stack";
import CardDetailsScreen from "@/screens/mainScreens/CardDetailsScreen";
import CardsScreen from "@/screens/tabScreens/CardsScreen";

const Cards = createStackNavigator();
export default function CardsView() {
  return (
    <Cards.Navigator>
      <Cards.Screen name="CardsScreen" component={CardsScreen} />
      <Cards.Screen
        name="CardDetailsScreen"
        component={CardDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Cards.Navigator>
  );
}
