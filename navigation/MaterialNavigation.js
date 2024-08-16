// navigation/TopTabNavigator.js
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoanTypeScreen from "../screens/LoanTypeScreen";
import News from "../screens/News";
import Tips from "../screens/Tips";
import Status from "../screens/Status";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createMaterialTopTabNavigator();

function MaterialNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIconStyle: { display: "flex" },
        tabBarItemStyle: { display: "flex" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: Colors.black,
        tabBarLabelStyle: { fontSize: 15 },
        tabBarContentContainerStyle: {
          backgroundColor: "#B4D6CD",
        },
      }}
    >
      <Tab.Screen name="LoanType" component={LoanTypeScreen} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Tips" component={Tips} />
      <Tab.Screen name="Status" component={Status} />
    </Tab.Navigator>
  );
}

export default MaterialNavigation;
