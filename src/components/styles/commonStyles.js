import { StyleSheet } from "react-native";
import { textColor } from "../../assets/color";

const fontFamily = StyleSheet.create({
  bold: {
    fontFamily: "", //SF-Pro-Display-Bold,
    fontWeight: 600
  }
});

export default StyleSheet.create({
  container: {
    padding: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  heading: {
    fontSize: 32,
    fontWeight: 700,
    color: textColor.black,
    ...fontFamily.bold
  },
  subHeading: {
    fontSize: 16,
    color: textColor.grey
  },
  title: {
    fontSize: 24,
    color: textColor.white,
    ...fontFamily.bold
  },
  number: {
    fontSize: 16,
    color: textColor.number,
    ...fontFamily.bold
  }
});
