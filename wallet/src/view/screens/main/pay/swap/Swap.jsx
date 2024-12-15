import { StyleSheet, Text, View } from "react-native";

export default function Swap() {
  return (
    <View style={styles.container}>
      <Text>Swap Screen</Text>
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
