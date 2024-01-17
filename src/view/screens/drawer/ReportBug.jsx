import { StyleSheet, Text, View } from "react-native";

export default function ReportBug() {
  return (
    <View style={styles.container}>
      <Text>Report Bug</Text>
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
