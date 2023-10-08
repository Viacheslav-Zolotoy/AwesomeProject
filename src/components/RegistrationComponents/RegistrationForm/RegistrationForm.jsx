import { Alert, StyleSheet, TextInput, View } from "react-native";
import { ButtonPasswordForm } from "../ButtonPasswordForm/ButtonPasswordForm";
import { ButtonRegistration } from "../ButtonRegistration/ButtonRegistration";
import { RegistrationCheck } from "../RegistrationCheck/RegistrationCheck";
import { useState } from "react";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onRegistration = () => {
    console.log(
      `"Login: ${login}" / "Email: ${email}" / "Password: ${password}"`
    );
    Alert.alert(
      "Реєстрація",
      `Login: ${login} / Email: ${email} / Password: ${password}`,
      [
        {
          text: "Відмінити",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
    reset();
  };

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={login}
        onChangeText={setLogin}
        style={styles.text}
        placeholder="Логін"
        placeholderTextColor={(color = "#BDBDBD")}
      ></TextInput>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.text}
        placeholder="Адреса електронної пошти"
        placeholderTextColor={(color = "#BDBDBD")}
      ></TextInput>
      <View style={styles.psswordContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={[styles.text, { paddingRight: 88 }]}
          placeholder="Пароль"
          placeholderTextColor={(color = "#BDBDBD")}
        ></TextInput>
        <ButtonPasswordForm />
      </View>
      <ButtonRegistration onRegistration={onRegistration} />
      <RegistrationCheck />
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
  psswordContainer: {
    position: "relative",
  },
});
