import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./CustomDrawerContent";
import MaterialNavigation from "./MaterialNavigation";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
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
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#B4D6CD" },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={MaterialNavigation}
        options={{
          headerTitle: "Home",
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
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
