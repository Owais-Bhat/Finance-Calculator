import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const principalAmount = parseFloat(principal);
    const interestRate = parseFloat(annualInterestRate) / 12 / 100;
    const termInMonths = parseInt(loanTerm) * 12;

    if (isNaN(principalAmount) || isNaN(interestRate) || isNaN(termInMonths)) {
      return;
    }

    const emiAmount =
      (principalAmount *
        interestRate *
        Math.pow(1 + interestRate, termInMonths)) /
      (Math.pow(1 + interestRate, termInMonths) - 1);

    setEmi(emiAmount.toFixed(2));
  };

  return (
    <LinearGradient
      colors={["#B4D6CD", "#000000", "#000000"]}
      style={styles.container}
    >
      <Text style={styles.title}>EMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Loan Amount (Principal)"
        keyboardType="numeric"
        placeholderTextColor={"#B4D6CD"}
        value={principal}
        onChangeText={setPrincipal}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={"#B4D6CD"}
        placeholder="Annual Interest Rate (%)"
        keyboardType="numeric"
        value={annualInterestRate}
        onChangeText={setAnnualInterestRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Loan Term (years)"
        placeholderTextColor={"#B4D6CD"}
        keyboardType="numeric"
        value={loanTerm}
        onChangeText={setLoanTerm}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          calculateEmi();
          setAnnualInterestRate("");
          setPrincipal("");
          setLoanTerm("");
        }}
      >
        <Text style={styles.text}>Calculate</Text>
      </TouchableOpacity>
      {emi !== null && (
        <Text style={styles.result}>Total Payment: ₹ {emi}</Text>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: "#fff",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  button: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#B4D6CD",
    backgroundColor: "#000",
  },
});

export default EmiCalculator;
