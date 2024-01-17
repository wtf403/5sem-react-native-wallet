import { StyleSheet, Text, View, Image } from "react-native";

export default function ComingSoon() {
  const Caravan = require("@/media/illustrations/Caravan.png");

  return (
    <View style={styles.container}>
      <Image source={Caravan} style={{ width: 200, height: 200 }} />
      <Text style={styles.heading}>Coming soon...</Text>
      <Text style={styles.subheading}>
        We're working hard to bring you something amazing!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheading: { maxWidth: 250, textAlign: "center", fontFamily: "InterMedium" },
});
