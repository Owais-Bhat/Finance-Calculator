import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Tips = () => {
  return (
    <LinearGradient colors={["#B4D6CD", "#000000", "#000000"]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Your Ultimate Loan Helper</Text>
        <Text style={styles.description}>
          Navigating the world of loans can be daunting, but Lamboria is here to
          simplify the process and guide you every step of the way. Our
          comprehensive Loan Helper feature is designed to assist you in making
          informed decisions, whether you're applying for a new loan or managing
          existing ones.
        </Text>

        <Text style={styles.subtitle}>Key Features:</Text>

        <Text style={styles.featureTitle}>Loan Calculator:</Text>
        <Text style={styles.featureDescription}>
          Calculate your potential loan payments and understand how different
          factors like interest rates and loan terms affect your monthly
          payments. Customize your calculations to fit your financial needs and
          plan your budget more effectively.
        </Text>

        <Text style={styles.featureTitle}>Personalized Recommendations:</Text>
        <Text style={styles.featureDescription}>
          Based on your financial profile and loan requirements, Lamboria offers
          tailored loan options. Our intelligent algorithms suggest the best
          lenders and loan products that match your needs, ensuring you get the
          most favorable terms available.
        </Text>

        <Text style={styles.featureTitle}>Loan Application Tracking:</Text>
        <Text style={styles.featureDescription}>
          Keep track of your loan application status with real-time updates.
          From submission to approval, monitor each step of the process and
          receive notifications for any required actions or updates.
        </Text>

        <Text style={styles.featureTitle}>Educational Resources:</Text>
        <Text style={styles.featureDescription}>
          Gain insights into various types of loans, including personal, auto,
          home, and student loans. Our educational content provides valuable
          information on loan terms, interest rates, and repayment strategies to
          help you make well-informed decisions.
        </Text>

        <Text style={styles.featureTitle}>Loan Management Tools:</Text>
        <Text style={styles.featureDescription}>
          Manage your loans efficiently with our suite of tools. View your
          repayment schedule, track payments, and access historical data to stay
          on top of your financial commitments.
        </Text>

        <Text style={styles.featureTitle}>Expert Support:</Text>
        <Text style={styles.featureDescription}>
          Have questions or need assistance? Our team of loan experts is
          available to provide personalized support and answer any queries you
          may have. Reach out through chat or email for expert guidance and
          advice.
        </Text>

        <Text style={styles.conclusion}>
          With Lamboria’s Loan Helper, you have a powerful ally in your
          financial journey. Experience peace of mind knowing that you have the
          tools and support to navigate the complexities of loans with
          confidence. Download Lamboria today and take control of your financial
          future!
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default Tips;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "white",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
    color: "white",
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
    textAlign: "center",
    color: "white",
  },
  featureDescription: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
    color: "white",
  },
  conclusion: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "white",
  },
});
