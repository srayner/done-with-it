import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";

export default function MenuItem({ icon, color = colors.medium, caption }) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons size={25} color={colors.white} name={icon} />
      </View>
      <Text style={styles.caption}>{caption}</Text>
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
