import { StyleSheet, Text, View } from "react-native";

export default function FAQ() {
  return (
    <View style={styles.container}>
      <Text>FAQ</Text>
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
