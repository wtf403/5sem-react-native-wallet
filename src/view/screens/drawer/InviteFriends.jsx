import { StyleSheet, Text, View } from "react-native";

export default function InviteFriends() {
  return (
    <View style={styles.container}>
      <Text>Invite Friends</Text>
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
