import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigation";
import IncomeScreen from "../screens/IncomeScreen";
import IncomeSource from "../screens/IncomeSource";
import PrivacyPolicyScreen from "../screens/PrivacyPolicy";
import Documents from "../screens/Documents";
import Purpose from "../screens/Purpose";
import Loans from "../screens/Loans";
import EmiCalculator from "../screens/EmiCalculator";
import News from "../screens/News";
import Details from "../components/Details";
import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();

function StackNavigation() {
  const animationValue = useRef(new Animated.Value(0)).current;
  const url =
    "https://api.whatsapp.com/send?phone=+919149437103&text=Hello%20From%20Online%20Mart!";

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 1000,
          easing: Animated.easeInOut,
          useNativeDriver: false,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 1000,
          easing: Animated.easeInOut,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animationValue]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#B4D6CD" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{ headerShown: false }} // Hide header for the drawer screen
      />
      <Stack.Screen
        name="IncomeScreen"
        component={IncomeScreen}
        options={{
          headerTitle: "Income Source",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />

      <Stack.Screen
        name="IncomeSource"
        component={IncomeSource}
        options={{
          headerTitle: "Income Amount",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{
          headerTitle: "Income Source",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
      <Stack.Screen
        name="Documents"
        component={Documents}
        options={{
          headerTitle: "Documents",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
      <Stack.Screen
        name="Purpose"
        component={Purpose}
        options={{
          headerTitle: "Purpose of Loan",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
      <Stack.Screen
        name="Loan"
        component={Loans}
        options={{
          headerTitle: "Loans",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
      <Stack.Screen
        name="Emi"
        component={EmiCalculator}
        options={{
          headerTitle: "Simple EMI Calculator",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{
          headerTitle: "News",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#B4D6CD" },
          headerTintColor: "white",
          headerRight: () => (
            <Animated.View
              style={{
                transform: [
                  {
                    scale: animationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
                borderColor: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["#06D001", "#FFFF00"],
                }),
              }}
            >
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => Linking.openURL(url)}
              >
                <Icon name="whatsapp" size={35} color="#06D001" brand={true} />
              </TouchableOpacity>
            </Animated.View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
