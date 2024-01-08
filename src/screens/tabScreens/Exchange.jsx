import { StyleSheet, Text, View } from "react-native";

export default function Exchange() {
  return (
    <View style={styles.container}>
      <Text>Exchange Screen</Text>
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
