import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { BackgroundContainer } from "../../components/BackgroundContainer/BackgroundContainer";
import { ContainerLogin } from "../../components/Login/ContainerLogin/ContainerLogin";
import { LoginForm } from "../../components/Login/LoginForm/LoginForm";
import { TitleLogin } from "../../components/Login/TitleLogin/TitleLogin";

export const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-60}
      >
        <BackgroundContainer>
          <ContainerLogin>
            <TitleLogin />
            <LoginForm />
          </ContainerLogin>
        </BackgroundContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
