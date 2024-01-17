import { StyleSheet, Text, View } from "react-native";

export default function AppIcon() {
  return (
    <View style={styles.container}>
      <Text>AppIcon</Text>
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
