import { StyleSheet, View } from "react-native";

export const ContainerRegistration = ({ children }) => {
  return (
    <View View style={styles.container}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    marginTop: "auto",
    width: "100%",
    height: "67%",

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
