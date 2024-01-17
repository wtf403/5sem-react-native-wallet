import { StyleSheet, Text, View, Button } from "react-native";

export default function Assets({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Assets</Text>
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
