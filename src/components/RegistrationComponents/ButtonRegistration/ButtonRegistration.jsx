import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonRegistration = ({ onRegistration }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onRegistration}>
      <Text style={styles.text}>Зареєстуватися</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 343,
    marginTop: 43,
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
  },
});
