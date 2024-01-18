import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Animated from "react-native-reanimated";
import CaravanImage from "@/media/Illustrations/Caravan.png";

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Animated.Image
        source={CaravanImage}
        transition={500}
        style={{ width: 200, height: 200 }}
      />
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
