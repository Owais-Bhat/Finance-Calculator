import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Cards = ({ image, title, premium, coverage, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{coverage}</Text>
        <Text style={styles.description}>{premium}</Text>
      </View>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: "lightblack",
    borderRadius: 12,
    elevation: 3,
    marginVertical: 8,
    padding: 10,
    width: "90%",
    gap: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 8,
  },
});

export default Cards;
