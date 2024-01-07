import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={styles.title}>Профиль</Text>
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.photo,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Имя: {user.firstName}</Text>
            <Text style={styles.text}>Фамилия: {user.lastName}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
          <Text style={styles.button_text}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  userInfoContainer: {
    flexDirection: "row",
    gap: 20,
    borderColor: "orange",
    borderRadius: 20,
    borderWidth: 3,
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "100%",
  },
  textContainer: {
    display: "flex",
    gap: 20,
  },
  text: {
    fontSize: 18,
    padding: 5,
    backgroundColor: "#c5eff6",
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "red",
    width: 150,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  button_text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Profile;
