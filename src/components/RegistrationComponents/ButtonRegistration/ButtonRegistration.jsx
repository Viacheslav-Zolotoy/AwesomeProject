import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonRegistration = () => {
  return (
    <TouchableOpacity type="submit" style={styles.container}>
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
