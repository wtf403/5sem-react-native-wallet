import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "@/view/com/BottomSheet";

export default function SetupWallet({ bottomSheetRef }) {
  return (
    <BottomSheet ref={bottomSheetRef}>
      <View style={styles.container}>
        <Text>Setup wallet</Text>
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
