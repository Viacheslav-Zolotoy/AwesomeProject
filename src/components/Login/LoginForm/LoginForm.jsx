import { StyleSheet, TextInput, View } from "react-native";
import { LoginCheck } from "../LoginCheck/LoginCheck";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import { ButtonPasswordLoginForm } from "../ButtonPasswordLoginForm/ButtonPasswordLoginForm";

export const LoginForm = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Адреса електронної пошти"
        placeholderTextColor={(color = "#BDBDBD")}
      ></TextInput>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.text, { paddingRight: 88 }]}
          placeholder="Пароль"
          placeholderTextColor={(color = "#BDBDBD")}
        ></TextInput>
        <ButtonPasswordLoginForm />
      </View>
      <ButtonLogin />
      <LoginCheck />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 33,
    gap: 16,
  },
  text: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,

    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    width: 343,
    height: 50,
    flexShrink: 0,
  },
  passwordContainer: {
    position: "relative",
  },
});
