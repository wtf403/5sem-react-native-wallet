import { StyleSheet, Text, View } from "react-native";

export default function PrivateKey() {
  return (
    <View style={styles.container}>
      <Text>Private Key</Text>
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
