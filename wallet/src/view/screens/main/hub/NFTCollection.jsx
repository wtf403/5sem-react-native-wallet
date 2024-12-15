import { useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function NFTCollection() {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.collection.name,
    });
  }, []);

  return (
    <BottomSheet>
      <View style={styles.container}>
        <Text>Pay with DRY</Text>
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
