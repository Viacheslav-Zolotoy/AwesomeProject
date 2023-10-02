import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { ContainerRegistration } from "../../components/RegistrationComponents/ContainerRegistration/ContainerRegistration";
import AddUserPhoto from "../../components/RegistrationComponents/AddUserFoto/AddUserFoto";
import { RegistrationForm } from "../../components/RegistrationComponents/RegistrationForm/RegistrationForm";
import { TitleRegistration } from "../../components/RegistrationComponents/TitleRegistration/TitleRegistration";
import { BackgroundContainer } from "../../components/BackgroundContainer/BackgroundContainer";

const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={150}
      >
        <BackgroundContainer>
          <ContainerRegistration>
            <AddUserPhoto />
            <TitleRegistration />
            <RegistrationForm />
          </ContainerRegistration>
        </BackgroundContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
