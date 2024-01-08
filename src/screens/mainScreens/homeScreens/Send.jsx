import { StyleSheet, Text, View } from "react-native";

export default function Send() {
  return (
    <View style={styles.container}>
      <Text>Send Screen</Text>
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
