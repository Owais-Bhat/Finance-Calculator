import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CheckBox from "expo-checkbox"; // Ensure this is correctly imported
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Documents = ({ route }) => {
  const { income } = route.params || {};
  const [aadharChecked, setAadharChecked] = useState(false);
  const [panChecked, setPanChecked] = useState(false);
  const [yearsOldChecked, setYearsOldChecked] = useState(false);

  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#B4D6CD", "#000000", "#000000"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>Aadhar Card</Text>
          <CheckBox
            value={aadharChecked}
            onValueChange={setAadharChecked}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>PAN Card</Text>
          <CheckBox
            value={panChecked}
            onValueChange={setPanChecked}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>18 Years Old</Text>
          <CheckBox
            value={yearsOldChecked}
            onValueChange={setYearsOldChecked}
            style={styles.checkbox}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Purpose");
            setAadharChecked(false);
            setPanChecked(false);
            setYearsOldChecked(false);
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {income !== undefined && (
          <Text style={styles.incomeText}>Income: ₹ {income}</Text>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
  },
  incomeText: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    position: "absolute",
    bottom: -200,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#333333",
    color: "white",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 25,
    color: "white",
  },
  button: {
    borderWidth: 2,
    borderColor: "#B4D6CD",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Documents;
