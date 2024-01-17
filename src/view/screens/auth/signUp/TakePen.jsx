import { StyleSheet, Text, View } from "react-native";

export default function TakePen() {
  return (
    <View style={styles.container}>
      <Text>Take Pen</Text>
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
