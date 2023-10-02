import { StyleSheet, View } from "react-native";

export const ContainerLogin = ({ children }) => {
  return (
    <View View style={styles.container}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "auto",
    width: "100%",
    height: "60%",

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
