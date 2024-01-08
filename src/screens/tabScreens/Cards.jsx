import { StyleSheet, Text, View } from "react-native";

export default function Cards() {
  return (
    <View style={styles.container}>
      <Text>Cards Screen</Text>
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
