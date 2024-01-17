import { StyleSheet, Text, View, Button } from "react-native";

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Receive")} title="Receive" />
      <Button onPress={() => navigation.navigate("Send")} title="Send" />
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
