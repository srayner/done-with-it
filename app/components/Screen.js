import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Contstants from "expo-constants";

export default function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Contstants.statusBarHeight,
    flex: 1,
  },
});
