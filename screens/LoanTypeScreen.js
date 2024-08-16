import { Image, StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";

const LoanTypeScreen = () => {
  const handleSupport = () => {
    const url = "https://loanwaystore.com/"; // Replace with your disclaimer link
    Linking.openURL(url);
  };
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#B4D6CD", "#000000", "#000000"]}
      style={styles.view}
    >
      <Image source={require("../assets/sticky.png")} style={styles.image} />
      <ScrollView>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("IncomeScreen")}
        >
          <Icon name="users" size={20} color="black" />
          <Text style={styles.text}>Loan Or Personal Loan</Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("IncomeScreen")}
        >
          <Icon name="file-alt" size={20} color="black" />
          <Text style={styles.text}>Any Other Type Of Loan</Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Emi")}
        >
          <Icon name="calculator" size={20} color="black" />
          <Text style={styles.text}>EMI Calculator</Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Pressable>
        <Pressable style={styles.container} onPress={handleSupport}>
          <Icon name="question" size={20} color="black" />
          <Text style={styles.text}>Help & Support</Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Pressable>
      </ScrollView>
      <Image source={require("../assets/sticky2.png")} style={styles.image2} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
    gap: 20,
    width: 350,
    height: 100,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: 400,
    height: 110,
    resizeMode: "cover",
    position: "absolute",
    top: 1,
  },
  image2: {
    width: 400,
    height: 110,
    resizeMode: "cover",
    position: "absolute",
    bottom: 1,
  },
});

export default LoanTypeScreen;
