import { StyleSheet, Text, View } from "react-native";

export default function Congratulations() {
  return (
    <View style={styles.container}>
      <Text>Congratulations!</Text>
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
