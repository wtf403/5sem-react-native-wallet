import { StyleSheet, Text, View } from "react-native";

export default function Protect() {
  return (
    <View style={styles.container}>
      <Text>Protect</Text>
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
