import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppFonts from "./components/AppFonts";

import Home from "./views/Home";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppFonts>
        <Home />
      </AppFonts>
      <StatusBar style="dark"  />
    </View>
  );
}
