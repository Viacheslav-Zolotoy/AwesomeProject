import { StyleSheet, TextInput, View } from "react-native";
import { ButtonPasswordForm } from "../ButtonPasswordForm/ButtonPasswordForm";
import { ButtonRegistration } from "../ButtonRegistration/ButtonRegistration";
import { RegistrationCheck } from "../RegistrationCheck/RegistrationCheck";

export const RegistrationForm = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Логін"
        placeholderTextColor={(color = "#BDBDBD")}
      ></TextInput>
      <TextInput
        style={styles.text}
        placeholder="Адреса електронної пошти"
        placeholderTextColor={(color = "#BDBDBD")}
      ></TextInput>
      <View style={styles.psswordContainer}>
        <TextInput
          style={[styles.text, { paddingRight: 88 }]}
          placeholder="Пароль"
          placeholderTextColor={(color = "#BDBDBD")}
        ></TextInput>
        <ButtonPasswordForm />
      </View>
      <ButtonRegistration />
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
