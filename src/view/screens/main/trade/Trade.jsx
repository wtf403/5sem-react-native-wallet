import { StyleSheet, Text, View, Button } from "react-native";

export default function Trade({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Trade</Text>
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
