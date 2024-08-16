import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/FontAwesome6";

const IncomeScreen = () => {
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
          onPress={() => navigation.navigate("IncomeSource")}
        >
          <Icon name="rupee-sign" size={30} color="black" />
          <Text style={styles.text}>Salaried</Text>
          <Icon name="chevron-right" size={25} color="black" />
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("IncomeSource")}
        >
          <Icons name="book-open-reader" size={30} color="black" />
          <Text style={styles.text}>Self Emoloyed</Text>
          <Icon name="chevron-right" size={25} color="black" />
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("IncomeSource")}
        >
          <Icon name="book-open" size={30} color="black" />
          <Text style={styles.text}>Student</Text>
          <Icon name="chevron-right" size={25} color="black" />
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("IncomeSource")}
        >
          <Icons name="person-arrow-down-to-line" size={30} color="black" />
          <Text style={styles.text}>Unemployed</Text>
          <Icon
            name="chevron-right"
            size={25}
            color="black"
            lineBreakMode="tail"
          />
        </Pressable>
      </ScrollView>
      <Image source={require("../assets/sticky2.png")} style={styles.image2} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 350,
    height: 100,
    alignItems: "center",
    gap: 20,

    justifyContent: "center",

    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  text: {
    fontSize: 25,

    color: "black",
  },
  image: {
    width: 400,
    height: 140,
    resizeMode: "cover",
    position: "absolute",
    top: 1,
  },
  image2: {
    width: 400,
    height: 130,
    resizeMode: "cover",
    position: "absolute",
    bottom: 1,
  },
});

export default IncomeScreen;
