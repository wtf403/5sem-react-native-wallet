import { StyleSheet, Text, View } from "react-native";

export default function PinCode({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
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
