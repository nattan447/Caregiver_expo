import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import homeloginscss from "../estilos/homeloginscss";
import React from "react";

const Splashscreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <StatusBar hidden={true}></StatusBar>
      <Image source={require("../assets/splashanimeted.gif")}></Image>
    </SafeAreaView>
  );
};
export default Splashscreen;
