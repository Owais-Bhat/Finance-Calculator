import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Details = ({ route }) => {
  const { title, description, image } = route.params;

  return (
    <LinearGradient
      colors={["#B4D6CD", "#000000", "#000000"]}
      style={styles.view}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={image} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightblack",
    borderRadius: 8,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default Details;
