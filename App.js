import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation";
import StackNavigation from "./navigation/StackNavigation";
import MaterialNavigation from "./navigation/MaterialNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* Use StackNavigation as the main navigation */}
    </NavigationContainer>
  );
}
