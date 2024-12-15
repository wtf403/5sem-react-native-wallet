import { useCallback, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetupWallet from "@/view/screens/main/pay/SetupWallet";

export default function Pay() {
  const navigation = useNavigation();

  const setupWalletRef = useRef(null);
  const handleSetupWalletExpand = useCallback(() => {
    setupWalletRef.current?.expand();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Button onPress={() => navigation.navigate("top-up")} title="top-up" />
        <Button onPress={() => navigation.navigate("swap")} title="swap" />
        <Button onPress={() => navigation.navigate("bridge")} title="bridge" />
        <Button onPress={() => navigation.navigate("send")} title="send" />
        <Button
          onPress={() => navigation.navigate("receive")}
          title="receive"
        />
        <Text>~~~~</Text>
        <Button onPress={() => handleSetupWalletExpand} title="Setup Wallet" />
        <Button onPress={() => null} title="Toggle companies" />
      </View>
      <SetupWallet bottomSheetRef={handleSetupWalletExpand} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
