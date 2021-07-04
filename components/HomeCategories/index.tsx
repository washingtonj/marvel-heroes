import React from "react";
import { View, Text, ScrollView } from "react-native";
import AppLazyImage from "../AppLazyImage";
import { Person } from "../../interfaces/Person";
import styles from "./styles";

interface Props {
  section: string;
  persons: Array<Person>;
}

export default function ScrollingCategory({ section, persons }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.sectionTitle}>{section}</Text>
        <Text style={styles.sectionSeeAll}>Ver todos</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrolling}
      >
        {persons.map((person, index) => (
          <AppLazyImage
            key={index}
            imageStyle={{ borderRadius: 16 }}
            style={styles.heroImageContainer}
            source={{ uri: person.imagePath }}
          >
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroName}>{person.name}</Text>
              <Text style={styles.HeroNickname}>{person.alterEgo}</Text>
            </View>
          </AppLazyImage>
        ))}
      </ScrollView>
    </View>
  );
}
