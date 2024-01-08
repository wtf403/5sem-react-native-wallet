import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Cards Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate("CardDetailsScreen", {
            cardName: "Max's Mastercard",
            cardNumber: "1111 1111 1111 1111",
            expire: "12/2022",
            cvv: "123",
          })
        }
        title="Details"
      />

      <Button
        onPress={() =>
          navigation.navigate("CardDetailsScreen", {
            cardName: "Max's Visa",
            cardNumber: "2222 2222 2222 2222",
            expire: "12/2022",
            cvv: "123",
          })
        }
        title="Details"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
