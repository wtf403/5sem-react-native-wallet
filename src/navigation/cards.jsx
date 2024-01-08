import { createStackNavigator } from "@react-navigation/stack";
import CardDetailsScreen from "@/screens/mainScreens/CardDetailsScreen";
import CardsScreen from "@/screens/tabScreens/CardsScreen";
import { useMemo } from "react";

const Cards = createStackNavigator();
export default function CardsView() {
  const snapPoints = useMemo(() => ["25%", "50%", "80%"], []);
  return (
    <Cards.Navigator>
      <Cards.Screen name="CardsScreen" component={CardsScreen} />
      <Cards.Screen name="CardDetailsScreen" component={CardDetailsScreen} />
    </Cards.Navigator>
  );
}
