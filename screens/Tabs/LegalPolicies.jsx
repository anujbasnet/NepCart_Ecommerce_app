import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
const { height, width } = Dimensions.get("window");
const LegalPolicies = () => {
  useFonts({
    "Baloo2-Bold": require("../../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("../../assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("../../assets/fonts/Baloo2-Regular.ttf"),
  });
  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "position" : undefined}
      style={{ flex: 1, backgroundColor: "#ffffff" }}
    >
      <View style={styles.heading}>
        <Text style={{ fontSize: width * 0.055, fontFamily: "Baloo2-Medium" }}>
          Legal and Policies
        </Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#ffffff" }}
        style={{ marginLeft: width * 0.03 }}
      >
        <Text style={styles.text}>Last Updated: August 2, 2025</Text>
        <Text style={styles.text}>
          Welcome to our e-commerce platform. By accessing and updating your
          profile, you acknowledge and agree to the following policies, which
          are designed to protect your data, outline how we use your
          information, and define your rights and responsibilities.
        </Text>
        <Text style={styles.headText}>1. Privacy Policy</Text>
        <Text style={styles.text}>
          We are committed to safeguarding your privacy and ensuring that your
          personal information remains protected. This section outlines what
          data we collect, how we use it, and how we keep it secure.
        </Text>
        <Text style={styles.subHeadText}>1.1 Information We Collect:</Text>
        <Text style={styles.text}>
          When you create or update your profile, we may collect your full name
          or username, email address or phone number, profile photo (optional),
          and device and usage data for security and analytics.
        </Text>
        <Text style={styles.subHeadText}>1.2 Purpose of Data Collection:</Text>
        <Text style={styles.text}>
          We collect and use your data to maintain and manage your user account,
          personalize your shopping experience, communicate with you regarding
          orders, offers, and updates, and improve our services and identify
          usage trends.
        </Text>
        <Text style={styles.subHeadText}>1.3 Third-Party Sharing:</Text>
        <Text style={styles.text}>
          We do not sell or rent your data to third parties. Your information
          may be shared with trusted partners or service providers such as
          payment gateways and cloud services only to the extent necessary to
          operate the platform, and always under strict confidentiality
          agreements.
        </Text>
        <Text style={styles.headText}>2. User Data and Consent</Text>
        <Text style={styles.text}>
          By entering and saving your profile information, you are consenting to
          the collection, processing, and storage of your data as described in
          this policy. You may withdraw your consent at any time by deleting
          your account or contacting our support team to request data deletion.
          Certain data may be retained for legal or operational reasons such as
          order history or transaction records.
        </Text>
        <Text style={styles.headText}>3. User Responsibilities</Text>
        <Text style={styles.text}>
          As a user of our platform, you are responsible for providing accurate
          and up-to-date information, keeping your login credentials
          confidential, not impersonating another person or using false details,
          and reporting any suspicious activity on your account. We reserve the
          right to suspend or terminate accounts found to be violating our terms
          or submitting fraudulent information.
        </Text>
        <Text style={styles.headText}>4. Security Measures</Text>
        <Text style={styles.text}>
          We implement modern security measures to protect your personal data.
          These include data encryption during transmission, secure password
          handling using hashing techniques, regular security audits, and
          session control mechanisms. Although we take every reasonable step to
          protect your data, no platform is entirely immune to risks. We
          encourage all users to use strong passwords and to contact us
          immediately if they notice anything suspicious.
        </Text>
        <Text style={styles.headText}>5. Terms of Use</Text>
        <Text style={styles.text}>
          By using our platform and editing your profile, you agree that you are
          at least 13 years old or have parental consent, that you will not use
          the platform for illegal or unauthorized activities, and that you will
          not upload any harmful, offensive, or copyrighted content. We may
          modify or update these policies at any time, with or without notice.
          Continued use of the app after such changes implies your acceptance of
          the revised terms.
        </Text>
        <Text style={styles.headText}>6. Data Retention</Text>
        <Text style={styles.text}>
          We retain your profile information for as long as your account is
          active. If you choose to delete your account, your personal data will
          be securely removed within 30 days unless it must be retained for
          legal or administrative purposes, such as transaction history or
          dispute resolution.
        </Text>
        <Text style={styles.headText}>7. Your Rights</Text>
        <Text style={styles.text}>
          You have the right to access the personal data we hold about you,
          request correction of inaccurate data, ask for deletion of your data,
          object to certain uses of your data such as for marketing, and file a
          complaint with relevant data protection authorities. To exercise any
          of these rights, please contact us through the email provided below.
        </Text>
        <Text style={styles.headText}>8. Contact Information</Text>
        <Text style={styles.text}>
          If you have any questions, concerns, or requests regarding your data
          or these policies, please reach out to us at support@example.com. Our
          support team is available Monday to Friday, from 9 AM to 5 PM (NPT).
        </Text>
        <Text style={styles.headText}>9. Acknowledgment</Text>
        <Text style={styles.text}>
          By saving or updating your profile, you confirm that you have read,
          understood, and agreed to this Privacy Policy and our Terms of Use.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LegalPolicies;

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    paddingTop: height * 0.06,
    height: height * 0.12,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e5e5ff",
    backgroundColor: "#ffffff",
  },
  text: {
    fontFamily: "Baloo2-Regular",
    color: "#777",
    fontSize:height * 0.02,
  },
  headText: {
    fontFamily: "Baloo2-Medium",
    color: "black",
    fontSize: height * 0.03,
  },
  subHeadText: {
    fontFamily: "Baloo2-Medium",
    color: "black",
    fontSize: height * 0.025,
  },
});
