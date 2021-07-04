import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import colors from "../../../constants/colors";
import typography from "../../../constants/typography";

export default function ScrollingCategory() {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.sectionTitle}>Heróis</Text>
        <Text style={styles.sectionSeeAll}>Ver todos</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolling}>
        <ImageBackground
          imageStyle={{ borderRadius: 16 }}
          style={styles.heroImageContainer}
          source={require("../../../assets/chars/spider-man.png")}
        >
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroName}>Peter Parker</Text>
            <Text style={styles.HeroNickname}>Homem Aranha</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          imageStyle={{ borderRadius: 16 }}
          style={styles.heroImageContainer}
          source={require("../../../assets/chars/deadpool.png")}
        >
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroName}>Wade Wilson</Text>
            <Text style={styles.HeroNickname}>Deadpool</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          imageStyle={{ borderRadius: 16 }}
          style={styles.heroImageContainer}
          source={require("../../../assets/chars/thanos.png")}
        >
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroName}>Athanasios</Text>
            <Text style={styles.HeroNickname}>Thanos</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginRight: 16
  },

  heroTextContainer: {
    width: "100%",
    alignSelf: "flex-end",
    padding: 10,
  },

  heroName: {
    color: colors["primary-white"],
    ...typography["card-subtitle"],
    marginBottom: 2
  },

  HeroNickname: {
    color: colors["primary-white"],
    ...typography["card-title"],
  },
});
