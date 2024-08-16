import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import Image15 from "../assets/businessLoan/14.jpeg";
import Image16 from "../assets/businessLoan/15.png";
import Image17 from "../assets/businessLoan/16.png";
import Image18 from "../assets/businessLoan/17.png";

const Status = () => {
  return (
    <LinearGradient
      colors={["#B4D6CD", "#000000", "#000000"]}
      style={styles.view}
    >
      <Image source={require("../assets/sticky.png")} style={styles.image} />
      <ScrollView contentContainerStyle={styles.container}>
        <Card imageSource={Image15} url="https://loanwaystore.com/" />
        <Card imageSource={Image16} url="https://loanwaystore.com/" />
        <Card imageSource={Image17} url="https://loanwaystore.com/" />
        <Card imageSource={Image18} url="https://loanwaystore.com/" />
        <Card imageSource={""} url="" />
      </ScrollView>
      <Image source={require("../assets/sticky2.png")} style={styles.image2} />
    </LinearGradient>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  image: {
    width: 400,
    height: 110,
    resizeMode: "cover",
    position: "relative",
    top: 1,
  },
  image2: {
    width: 400,
    height: 110,
    resizeMode: "cover",
    position: "absolute",
    bottom: 110,
  },
});
