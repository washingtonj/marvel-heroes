import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";


export default StyleSheet.create({
  container: {
    width: "100%",
  },

  topbar: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sectionTitle: {
    color: colors["primary-red"],
    ...typography["section-title"],
  },

  sectionSeeAll: {
    color: colors["primary-gray"],
    ...typography.description,
  },

  scrolling: {
    flexDirection: "row",
    marginTop: 16,
    paddingLeft: 24,
  },

  heroImageContainer: {
    justifyContent: "flex-end",
    width: 140,
    height: 230,
    marginRight: 16,
  },

  heroTextContainer: {
    width: "100%",
    alignSelf: "flex-end",
    padding: 10,
  },

  heroName: {
    color: colors["primary-white"],
    ...typography["card-subtitle"],
    marginBottom: 2,
  },

  HeroNickname: {
    color: colors["primary-white"],
    ...typography["card-title"],
  },
});
