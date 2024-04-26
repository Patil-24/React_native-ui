import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import {StatusBar} from "expo-status-bar"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    // Validate phone number here
    if (phoneNumber.length === 10) {
      // Navigate to home screen
      navigation.navigate("Home");
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <StatusBar style="dark" />
      <ImageBackground
        source={require("../assets/login.jpeg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.headerText}>Log In</Text>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#ccc"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <TouchableOpacity onPress={handleContinue} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.orText}>
          <Text>or</Text>
        </View>
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/google.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/apple.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>By signing in, You agree to our Terms, conditions, Privacy & Policy</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight * 0.7,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 40,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    marginTop: -30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  inputContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "#ad7609",
    paddingVertical: 12,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  orText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    paddingHorizontal:50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    marginBottom:10,
    marginTop: 20,
    paddingHorizontal:10,
    textAlign: "center",
    color: "#000",
  },
});

export default LoginScreen;
