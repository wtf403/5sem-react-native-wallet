import { StyleSheet, Text, View } from "react-native";

export default function topUp() {
  return (
    <View style={styles.container}>
      <Text>Top Up Screen</Text>
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
