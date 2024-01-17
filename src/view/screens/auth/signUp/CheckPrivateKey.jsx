import { StyleSheet, Text, View } from "react-native";

export default function CheckPrivateKey() {
  return (
    <View style={styles.container}>
      <Text>CheckPrivate Key</Text>
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
