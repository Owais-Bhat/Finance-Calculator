import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Cards"; // Adjust the import path as necessary
import { useNavigation } from "@react-navigation/native";

const News = () => {
  const navigation = useNavigation();

  const handleCardPress = (title, description, image) => {
    navigation.navigate("Details", { title, description, image });
  };

  const NewsData = [
    {
      image: require("../assets/11.jpeg"),
      title: "Comprehensive Loan Insurance",
      description:
        "Protect your loan against unforeseen circumstances with comprehensive coverage. Includes protection against job loss, disability, and critical illness.",
      coverage: "Full Coverage: ₹50,000/year",
      premium: "Premium: ₹500/year",
    },
    {
      image: require("../assets/12.jpg"),
      title: "Accidental Death Coverage",
      description:
        "Ensure your loan is covered in case of accidental death. This insurance provides peace of mind knowing that your loan will be settled without burdening your family.",
      coverage: "Full Coverage: ₹70,000/year",
      premium: "Premium: ₹700/year",
    },
    {
      image: require("../assets/13.jpg"),
      title: "Critical Illness Protection",
      description:
        "Safeguard your financial stability with coverage for critical illnesses. This policy covers loan repayments in the event of severe health conditions.",
      coverage: "Full Coverage: ₹80,000/year",
      premium: "Premium: ₹800/year",
    },
    {
      image: require("../assets/14.jpg"),
      title: "Unemployment Coverage",
      description:
        "Cover your loan payments if you experience job loss. This insurance provides financial support during periods of unemployment to ensure your loan is not a burden.",
      coverage: "Full Coverage: ₹60,000/year",
      premium: "Premium: ₹600/year",
    },
    {
      image: require("../assets/15.jpg"),
      title: "Disability Insurance",
      description:
        "Protect your loan repayments if you become disabled. This coverage ensures that your loan obligations are met even if you are unable to work due to disability.",
      coverage: "Full Coverage: ₹90,000/year",
      premium: "Premium: ₹900/year",
    },
    {
      image: require("../assets/16.jpg"),
      title: "Family Protection Plan",
      description:
        "Provide financial security for your family with this loan insurance. Covers loan payments in case of death, disability, or critical illness, ensuring no financial strain on your loved ones.",
      coverage: "Full Coverage: ₹100,000/year",
      premium: "Premium: ₹1,000/year",
    },
    {
      image: require("../assets/17.jpg"),
      title: "Loan Settlement Cover",
      description:
        "Ensure that your loan is fully settled in case of unforeseen events. This policy covers the outstanding balance of your loan, relieving financial stress on your family.",
      coverage: "Full Coverage: ₹55,000/year",
      premium: "Premium: ₹550/year",
    },
    {
      image: require("../assets/18.jpg"),
      title: "Job Loss Insurance",
      description:
        "Protect yourself against the financial impact of job loss with this loan insurance. Covers your loan payments during periods of unemployment.",
      coverage: "Full Coverage: ₹75,000/year",
      premium: "Premium: ₹750/year",
    },
    {
      image: require("../assets/19.jpg"),
      title: "Income Protection Plan",
      description:
        "Ensure loan payments are covered if you face a temporary loss of income. This insurance provides financial relief during periods of reduced income or unemployment.",
      coverage: "Full Coverage: ₹85,000/year",
      premium: "Premium: ₹850/year",
    },
    {
      image: require("../assets/20.jpg"),
      title: "Total Disability Coverage",
      description:
        "Get full protection for your loan in case of total disability. This insurance ensures that your loan payments are covered if you become permanently disabled.",
      coverage: "Full Coverage: ₹95,000/year",
      premium: "Premium: ₹950/year",
    },
  ];

  return (
    <LinearGradient
      colors={["#B4D6CD", "#000000", "#000000"]}
      style={styles.view}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {NewsData.map((news, index) => (
          <Card
            key={index}
            image={news.image}
            title={news.title}
            coverage={news.coverage}
            premium={news.premium}
            description={news.description}
            onPress={() =>
              handleCardPress(news.title, news.description, news.image)
            }
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default News;
