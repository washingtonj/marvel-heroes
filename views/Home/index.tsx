import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import ScrollingCategory from "./_components/ScrollingCategory";
import { getCategories } from "../../services/categories.services";

export default function Home() {
  const [categories, setCategories] = useState(getCategories());

  return (
    <View style={styles.container}>
      <View style={styles.containerWithMargin}>
        <AppBar />
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ paddingVertical: 17 }}>
          <View style={styles.containerWithMargin}>
            <View style={styles.welcome}>
              <Text style={styles.welcomeSubtitle}>
                Bem vindo ao Marvel Heroes
              </Text>
              <Text style={styles.welcomeTitle}>Escolha o seu personagem</Text>
            </View>
          </View>

          {categories.map((categorie) => (
            <>
              <ScrollingCategory
                section={categorie.categorie}
                persons={categorie.persons}
                key={categorie.id}
              />
              <View style={{ marginVertical: 30 }}></View>
            </>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
