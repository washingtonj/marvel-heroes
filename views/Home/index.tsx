import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import HomeCategories from "../../components/HomeCategories";
import { getCategories } from "../../services/categories.services";
import { Categories } from "../../interfaces/Categories";

export default function Home() {
  const [categories, setCategories] = useState<Categories[]>();

  useEffect(() => {
    const fetch = getCategories();
    setCategories(fetch);
  }, []);

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
          {categories?.map((categorie) => (
            <React.Fragment key={categorie.id}>
              <HomeCategories
                section={categorie.categorie}
                persons={categorie.persons}
              />
              <View style={{ marginVertical: 30 }}></View>
            </React.Fragment>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
