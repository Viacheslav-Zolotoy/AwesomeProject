import { ImageBackground } from "react-native";

const bgImage = require("../../images/PhotoBG.jpg");

export const BackgroundContainer = ({ children }) => {
  return (
    <ImageBackground source={bgImage} style={{ width: "100%", height: "100%" }}>
      {children}
    </ImageBackground>
  );
};
