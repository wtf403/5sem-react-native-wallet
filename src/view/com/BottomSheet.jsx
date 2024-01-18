import React, { useMemo, forwardRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { default as GorhomBottomSheet } from "@gorhom/bottom-sheet";

const BottomSheet = forwardRef(
  ({ animateOnMount = true, snapPoints = ["90%"], index = 0 }, ref) => {
    const snap = useMemo(() => snapPoints, []);

    return (
      <GorhomBottomSheet
        animateOnMount={animateOnMount}
        snapPoints={snap}
        index={index}
        ref={ref}
      >
        <View style={styles.container}>
          <Text>BottomSheet</Text>
        </View>
      </GorhomBottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomSheet;
