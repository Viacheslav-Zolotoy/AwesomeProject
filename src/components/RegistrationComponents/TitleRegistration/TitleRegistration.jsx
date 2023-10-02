import { StyleSheet, Text } from "react-native";

export const TitleRegistration = () => {
  return <Text style={styles.title}>Реєстрація</Text>;
};
const styles = StyleSheet.create({
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.3,
    marginTop: 92,
  },
});
