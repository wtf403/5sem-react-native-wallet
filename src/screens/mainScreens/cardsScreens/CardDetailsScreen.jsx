import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function CardDetailsScreen({ navigation }) {
  const route = useRoute();
  const { params } = route;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },
    cardWrapper: {
      width: "80%",
      height: "40%",
      backgroundColor: "lightgrey",
      borderRadius: 10,
      padding: 20,
    },
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.cardName,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Text>{params.cardNumber}</Text>
        <Text>{params.expire}</Text>
        <Text>{params.cvc}</Text>
      </View>
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
