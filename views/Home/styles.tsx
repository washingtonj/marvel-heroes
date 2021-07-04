import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import Color from "../../constants/colors";
import Typography from "../../constants/typography";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 10,
  },

  containerWithMargin: {
    marginHorizontal: 24,
  },

  welcome: {
    marginTop: 24,
    marginBottom: 15,
  },

  welcomeSubtitle: {
    color: Color["primary-gray"],
    ...Typography["home-subtitle"],
    marginBottom: 10,
  },

  welcomeTitle: {
    ...Typography["home-title"],
  },
});
