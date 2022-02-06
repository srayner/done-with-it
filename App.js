import React from "react";
import { StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title="Jacket for sale"
        subTitle="£80"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
