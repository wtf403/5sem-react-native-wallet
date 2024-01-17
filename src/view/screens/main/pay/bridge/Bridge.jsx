import { StyleSheet, Text, View, Button } from "react-native";

export default function Bridge({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bridge</Text>
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
