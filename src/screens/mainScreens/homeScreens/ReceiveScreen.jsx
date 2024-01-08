import { StyleSheet, Text, View } from "react-native";

export default function ReceiveScreen() {
  return (
    <View style={styles.container}>
      <Text>Receive Screen</Text>
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
