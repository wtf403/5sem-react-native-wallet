import { useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Category() {
  const snapPoints = useMemo(() => ["20%", "90%"], []);

  const { navigate } = useNavigation();

  const company = {
    name: "Aeza",
  };

  return (
    <BottomSheet animateOnMount={true} snapPoints={snapPoints} index={1}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => null}>
          <Text>Aeza</Text>
        </TouchableOpacity>
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
