import { StyleSheet, Text, View, Button } from "react-native";

export default function Hub({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hub</Text>
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
