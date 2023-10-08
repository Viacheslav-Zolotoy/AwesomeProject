import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { ContainerRegistration } from "../../components/RegistrationComponents/ContainerRegistration/ContainerRegistration";
import AddUserPhoto from "../../components/RegistrationComponents/AddUserPhoto/AddUserPhoto";
import { RegistrationForm } from "../../components/RegistrationComponents/RegistrationForm/RegistrationForm";
import { TitleRegistration } from "../../components/RegistrationComponents/TitleRegistration/TitleRegistration";
import { BackgroundContainer } from "../../components/BackgroundContainer/BackgroundContainer";

const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
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
