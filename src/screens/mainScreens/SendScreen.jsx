import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function SendScreen() {
  const snapPoints = useMemo(() => ["20%", "90%"], []);

  return (
    <BottomSheet animateOnMount={true} snapPoints={snapPoints} index={1}>
      <View style={styles.container}>
        <Text>Send Screen</Text>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
