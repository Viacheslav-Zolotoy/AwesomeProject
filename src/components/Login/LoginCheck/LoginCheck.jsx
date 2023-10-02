import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const LoginCheck = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
  },
});
