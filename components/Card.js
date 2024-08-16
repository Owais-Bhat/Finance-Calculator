// Card.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Card = ({ imageSource, url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,

    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#B4D6CD",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
