// Loans.js
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../components/Card";

import Image1 from "../assets/aadharLoan/1.png";
import Image2 from "../assets/aadharLoan/2.png";
import Image3 from "../assets/aadharLoan/3.png";
import Image4 from "../assets/aadharLoan/4.png";
import Image5 from "../assets/bankloan/5.png";
import Image6 from "../assets/bankloan/6.png";
import Image7 from "../assets/bankloan/7.jpg";
import Image8 from "../assets/bankloan/8.png";
import Image28 from "../assets/bankloan/9.png";
import Image9 from "../assets/bankloan/10.png";
import Image10 from "../assets/bankloan/11.jpg";
import Image11 from "../assets/bankloan/12.png";
import Image12 from "../assets/bankloan/13.png";
import Image13 from "../assets/businessLoan/14.jpeg";
import Image14 from "../assets/businessLoan/15.png";
import Image15 from "../assets/businessLoan/16.png";
import Image16 from "../assets/businessLoan/17.png";
import Image17 from "../assets/homeLoan/18.png";
import Image18 from "../assets/homeLoan/19.png";
import Image19 from "../assets/homeLoan/20.png";
import Image20 from "../assets/personalLoan/21.jpeg";
import Image21 from "../assets/personalLoan/22.png";
import Image22 from "../assets/personalLoan/23.png";
import Image23 from "../assets/studentLoan/24.jpeg";
import Image24 from "../assets/studentLoan/25.jpeg";
import Image25 from "../assets/studentLoan/26.jpeg";
import Image26 from "../assets/studentLoan/27.jpeg";
import Image27 from "../assets/studentLoan/28.jpeg";
import { LinearGradient } from "expo-linear-gradient";

const Loans = () => {
  return (
    <LinearGradient colors={["#B4D6CD", "#000000", "#000000"]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Card imageSource={Image1} url="https://loanwaystore.com/" />
        <Card imageSource={Image2} url="https://loanwaystore.com/" />
        <Card imageSource={Image3} url="https://loanwaystore.com/" />
        <Card imageSource={Image4} url="https://loanwaystore.com/" />
        <Card imageSource={Image5} url="https://loanwaystore.com/" />
        <Card imageSource={Image6} url="https://loanwaystore.com/" />
        <Card imageSource={Image7} url="https://loanwaystore.com/" />
        <Card imageSource={Image8} url="https://loanwaystore.com/" />
        <Card imageSource={Image28} url="https://loanwaystore.com/" />
        <Card imageSource={Image9} url="https://loanwaystore.com/" />
        <Card imageSource={Image10} url="https://loanwaystore.com/" />
        <Card imageSource={Image11} url="https://loanwaystore.com/" />
        <Card imageSource={Image12} url="https://loanwaystore.com/" />
        <Card imageSource={Image13} url="https://loanwaystore.com/" />
        <Card imageSource={Image14} url="https://loanwaystore.com/" />
        <Card imageSource={Image15} url="https://loanwaystore.com/" />
        <Card imageSource={Image16} url="https://loanwaystore.com/" />
        <Card imageSource={Image17} url="https://loanwaystore.com/" />
        <Card imageSource={Image18} url="https://loanwaystore.com/" />
        <Card imageSource={Image19} url="https://loanwaystore.com/" />
        <Card imageSource={Image20} url="https://loanwaystore.com/" />
        <Card imageSource={Image21} url="https://loanwaystore.com/" />
        <Card imageSource={Image22} url="https://loanwaystore.com/" />
        <Card imageSource={Image23} url="https://loanwaystore.com/" />
        <Card imageSource={Image24} url="https://loanwaystore.com/" />
        <Card imageSource={Image25} url="https://loanwaystore.com/" />
        <Card imageSource={Image26} url="https://loanwaystore.com/" />
        <Card imageSource={Image27} url="https://loanwaystore.com/" />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
});

export default Loans;
