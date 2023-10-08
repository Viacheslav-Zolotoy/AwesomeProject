import { Image, TouchableOpacity } from "react-native";
const plaseholderUserPhoto = require("../../../images/AddPhoto.png");
const userPhoto = require("../../../images/UserPhoto.jpg");
const AddUserPhoto = () => {
  return (
    <TouchableOpacity>
      <Image
        source={userPhoto ? userPhoto : plaseholderUserPhoto}
        style={{
          position: "absolute",
          top: -60,
          left: -50,
          width: 110,
          height: 120,

          overflow: userPhoto ? "hidden" : "visible",
          backgroundColor: "#F6F6F6",
          borderRadius: 25,
        }}
      />
    </TouchableOpacity>
  );
};
export default AddUserPhoto;
