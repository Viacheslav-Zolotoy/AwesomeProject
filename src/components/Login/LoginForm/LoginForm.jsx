import { Alert, StyleSheet, TextInput, View } from "react-native";
import { LoginCheck } from "../LoginCheck/LoginCheck";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import { ButtonPasswordLoginForm } from "../ButtonPasswordLoginForm/ButtonPasswordLoginForm";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    console.log(`"Email: ${email}" / "Password: ${password}"`);
    Alert.alert("Вхід", `Email: ${email} / Password: ${password}`);
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.text}
        placeholder="Адреса електронної пошти"
        placeholderTextColor={(color = "#BDBDBD")}
      ></TextInput>
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={[styles.text, { paddingRight: 88 }]}
          placeholder="Пароль"
          placeholderTextColor={(color = "#BDBDBD")}
        ></TextInput>
        <ButtonPasswordLoginForm />
      </View>
      <ButtonLogin onLogin={onLogin} />
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
