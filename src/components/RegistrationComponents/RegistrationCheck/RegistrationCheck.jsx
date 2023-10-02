import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const RegistrationCheck = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
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
