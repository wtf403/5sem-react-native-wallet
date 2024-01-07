import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Passcode = () => {
  const [pinCount, setPinCount] = useState(0);
  const totalPins = 6;

  const navigation = useNavigation();

  useEffect(() => {
    if (pinCount === totalPins) {
      navigation.navigate("TermsAndConditions");
    }
  }, [pinCount]);

  const renderPins = () => {
    const pins = [];
    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <View key={x} style={styles.pinContainer}>
            <View style={styles.pin} />
          </View>
        ) : (
          <View key={x} style={styles.pinContainer} />
        )
      );
    }
    return pins;
  };

  const pressKey = (_, index) => {
    setPinCount((prev) => {
      if (index === 10) {
        return prev - 1;
      }
      return prev >= totalPins ? prev : prev + 1;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Text>To main</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Bank App</Text>
      <Text style={styles.subtitle}>Enter your PIN code.</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text>To Main</Text>
      </TouchableOpacity>

      <View style={styles.accessPin}>{renderPins()}</View>

      <Text style={styles.forgotPin}>Forgot PIN?</Text>

      <View style={styles.numberPad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
          <TouchableOpacity
            key={digit}
            style={styles.numberButton}
            onPress={() => pressKey(null, digit)}
          >
            <Text style={styles.numberButtonText}>{digit}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => pressKey(null, 10)}
        >
          <Text style={styles.numberButtonText}>DEL</Text>
        </TouchableOpacity>
      </View>

      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    height: "100%",
    maxWidth: 400,
    marginHorizontal: "auto",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#964ff0",
    margin: "32px 0 0 0",
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    margin: "32px 0 0 0",
  },
  accessPin: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "32px 64px 16px 64px",
  },
  forgotPin: {
    textAlign: "center",
    fontWeight: "bold",
    margin: "8pt 0 0 0",
    color: "#9c9c9f",
  },
  numberPad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  numberButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#5196f4",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  numberButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  pinContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#5196f4",
    alignItems: "center",
    justifyContent: "center",
  },
  pin: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#5196f4",
  },
};

export default Passcode;
