import React, { useMemo } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function HomeScreen({ navigation }) {
  const snapPoints = useMemo(() => ["25%", "50%", "80%"], []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("ReceiveScreen")}
        title="Receive"
      />
      <Button onPress={() => navigation.navigate("SendScreen")} title="Send" />

      <BottomSheet animateOnMount={true} snapPoints={snapPoints} index={1}>
        <Text>hello world!</Text>
      </BottomSheet>
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
