import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

export default function MenuItem({ icon, color = colors.medium, caption }) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons size={25} color={colors.white} name={icon} />
      </View>
      <AppText style={styles.caption}>{caption}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    fontWeight: "600",
  },
});
