// navigation/CustomDrawerContent.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Share,
  Image,
} from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomDrawerContent = (props) => {
  const handleRateApp = () => {
    // const url =
    //   Platform.OS === "ios"
    //     ? "itms-apps://apps.apple.com/app/idYOUR_APP_ID" // Replace with your iOS app ID
    //     : "market://details?id=YOUR_PACKAGE_NAME"; // Replace with your Android package name
    // Linking.openURL(url);
  };

  const handleShareApp = async () => {
    try {
      await Share.share({
        message: "Check out this amazing app: YOUR_APP_LINK", // Replace with your app link
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDisclaimer = () => {
    const url = "https://loanwaystore.com/"; // Replace with your disclaimer link
    Linking.openURL(url);
  };
  const handleContactUs = () => {
    const url =
      "https://api.whatsapp.com/send?phone=+919149437103&text=Hello%20From%20Your%20App!"; // Replace with your WhatsApp number and message
    Linking.openURL(url);
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* Login Button */}
      <View style={styles.loginContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      {/* Drawer Items */}
      <DrawerItem
        label="Home"
        pressColor="black"
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "gray",
          elevation: 5,
          borderRadius: 20,
        }}
        icon={() => <Icon name="home" size={30} color="black" />}
        onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
        label="Contact Us"
        pressColor="black"
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "gray",
          elevation: 5,
          borderRadius: 20,
        }}
        icon={() => <Icon name="contacts" size={30} color="black" />}
        onPress={handleContactUs}
      />
      <DrawerItem
        label="Rate App"
        pressColor="black"
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "gray",
          elevation: 5,
          borderRadius: 20,
        }}
        icon={() => <Icon name="star" size={30} color="black" />}
        onPress={handleRateApp}
      />
      <DrawerItem
        label="Share App"
        pressColor="black"
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "gray",
          elevation: 5,
          borderRadius: 20,
        }}
        icon={() => <Icon name="share" size={30} color="black" />}
        onPress={handleShareApp}
      />
      <DrawerItem
        label="Privacy Policy"
        pressColor="black"
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "gray",
          elevation: 5,
          borderRadius: 20,
        }}
        icon={() => <Icon name="shield" size={30} color="black" />}
        onPress={() => props.navigation.navigate("PrivacyPolicy")}
      />
      <DrawerItem
        label="Disclaimer"
        pressColor="black"
        style={{
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "gray",
          elevation: 5,
          borderRadius: 20,
        }}
        icon={() => <Icon name="alert" size={30} color="black" />}
        onPress={handleDisclaimer}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginLeft: 30,
    paddingBottom: 100,
    width: 200,
    height: 200,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
});

export default CustomDrawerContent;
