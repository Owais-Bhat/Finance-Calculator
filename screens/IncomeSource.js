import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const IncomeSource = () => {
  const [income, setIncome] = useState();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (income === "") {
      alert("Please enter a valid income.");
    } else {
      navigation.navigate("Documents", { income });
      setIncome("");
    }

    // Pass the income value to the next tab
  };

  return (
    <LinearGradient
      colors={["#B4D6CD", "#000000", "#000000"]}
      style={styles.container}
    >
      <Image source={require("../assets/sticky.png")} style={styles.image} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={income}
          onChangeText={(text) => setIncome(text.replace(/[^0-9]/g, ""))} // Allow only numbers
          keyboardType="numeric"
          placeholder="Enter income"
          placeholderTextColor={"#B4D6CD"}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Image source={require("../assets/sticky2.png")} style={styles.image2} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: 350,
    height: 50,
    // backgroundColor: "#ffffff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#B4D6CD",
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#B4D6CD",
  },
  button: {
    borderWidth: 2,
    borderColor: "#B4D6CD",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IncomeSource;
