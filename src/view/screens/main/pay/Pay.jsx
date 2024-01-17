import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Pay() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Pay</Text>

      <Button onPress={() => navigation.navigate("top-up")} title="top-up" />
      <Button onPress={() => navigation.navigate("swap")} title="swap" />
      <Button onPress={() => navigation.navigate("bridge")} title="bridge" />
      <Button onPress={() => navigation.navigate("send")} title="send" />
      <Button onPress={() => navigation.navigate("receive")} title="receive" />

      <Button
        onPress={() =>
          navigation.navigate("CardDetails", {
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
          navigation.navigate("CardDetails", {
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
