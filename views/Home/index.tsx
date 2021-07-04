import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import AppBar from "../../components/AppBar";
import ScrollingCategory from "./_components/ScrollingCategory";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerWithMargin}>
        <AppBar />
        <View style={styles.welcome}>
          <Text style={styles.welcomeSubtitle}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.welcomeTitle}>Escolha o seu personagem</Text>
        </View>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ paddingVertical: 17 }}>
          <ScrollingCategory />
          <View style={{ marginVertical: 30 }}></View>
          <ScrollingCategory />
          <View style={{ marginVertical: 30 }}></View>
          <ScrollingCategory />
          <View style={{ marginVertical: 30 }}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
