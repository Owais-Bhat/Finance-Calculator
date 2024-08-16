// screens/PrivacyPolicyScreen.js
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ScrollViewComponent,
} from "react-native";

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={["#B4D6CD", "#000000", "#000000"]}
        style={styles.content}
      >
        <Text style={styles.text}>
          {/* Introduction */}
          <Text style={styles.subHeader}>Introduction</Text>
          {"\n\n"}
          Welcome to [Your App Name]. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our mobile application. Please read this privacy policy carefully. If
          you do not agree with the terms of this privacy policy, please do not
          access the application.
          {"\n\n"}
          {/* Information Collection */}
          <Text style={styles.subHeader}>Information Collection</Text>
          {"\n\n"}
          We may collect information about you in a variety of ways. The
          information we may collect via the application includes:
          {"\n\n"} Personal Data: Personally identifiable information, such as
          your name, email address, and telephone number, and demographic
          information, such as your age, gender, hometown, and interests, that
          you voluntarily give to us when you register with the application or
          when you choose to participate in various activities related to the
          application.
          {"\n\n"} Derivative Data: Information our servers automatically
          collect when you access the application, such as your IP address, your
          browser type, your operating system, your access times, and the pages
          you have previously viewed in the application.
          {"\n\n"}
          {/* Use of Information */}
          <Text style={styles.subHeader}>Use of Information</Text>
          {"\n\n"}
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the application to:
          {"\n\n"} Assist Law Enforcement and Respond to subpoenas: We may work
          with law enforcement agencies, public authorities, or other
          organizations to enforce and comply with the law.
          {"\n\n"} Compile Anonymous Data: We may compile anonymous data for
          research and analysis purposes.
          {"\n\n"}
          {/* Disclosure of Information */}
          <Text style={styles.subHeader}>Disclosure of Information</Text>
          {"\n\n"}
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
          {"\n\n"} By Law or to Protect Rights: If we believe the release of
          information about you is necessary to respond to legal process, to
          investigate or remedy potential violations of our policies, or to
          protect the rights, property, and safety of others, we may share your
          information as permitted or required by any applicable law, rule, or
          regulation.
          {"\n\n"} Business Transfers: We may share or transfer your information
          in connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
          {"\n\n"}
          {/* Security of Information */}
          <Text style={styles.subHeader}>Security of Information</Text>
          {"\n\n"}
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
          {"\n\n"}
          {/* Policy for Children */}
          <Text style={styles.subHeader}>Policy for Children</Text>
          {"\n\n"}
          We do not knowingly solicit information from or market to children
          under the age of 13. If we learn that we have collected personal
          information from a child under age 13 without verification of parental
          consent, we will delete that information as quickly as possible.
          {"\n\n"}
          {/* Changes to This Privacy Policy */}
          <Text style={styles.subHeader}>Changes to This Privacy Policy</Text>
          {"\n\n"}
          We may update this Privacy Policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
          {"\n\n"}
          {/* Contact Us */}
          <Text style={styles.subHeader}>Contact Us</Text>
          {"\n\n"}
          If you have questions or comments about this Privacy Policy, please
          contact us at:
          {"\n\n"}
          [Your Contact Information]
        </Text>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "auto",
  },
});

export default PrivacyPolicyScreen;
