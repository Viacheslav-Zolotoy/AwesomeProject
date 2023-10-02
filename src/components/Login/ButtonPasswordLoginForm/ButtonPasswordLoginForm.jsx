import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonPasswordLoginForm = () => {
  return (
    <TouchableOpacity style={styles.buttonPassword}>
      <Text style={styles.text}>Показати</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonPassword: {
    position: "absolute",
    top: 17,
    right: 16,
  },
  text: {
    color: "#1B4371",
  },
});
