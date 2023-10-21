import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { Login } from "./src/Screens/LoginScreen/LoginScreen";

const fontsRobotoRegular = require("./assets/fonts/RobotoRegular.ttf");
const fontsRobotoMedium = require("./assets/fonts/RobotoMedium.ttf");
const fontsRobotoBold = require("./assets/fonts/RobotoBold.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: fontsRobotoRegular,
    RobotoMedium: fontsRobotoMedium,
    RobotoBold: fontsRobotoBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      {/* <Login /> */}
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
