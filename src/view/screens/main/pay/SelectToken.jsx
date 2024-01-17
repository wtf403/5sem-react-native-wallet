import { StyleSheet, Text, View } from "react-native";

export default function SelectTokenScreen() {
  return (
    <View style={styles.container}>
      <Text>Select Token Screen</Text>
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
