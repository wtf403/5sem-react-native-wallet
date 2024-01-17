import { StyleSheet, Text, View } from "react-native";

export default function Language() {
  return (
    <View style={styles.container}>
      <Text>Language</Text>
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
