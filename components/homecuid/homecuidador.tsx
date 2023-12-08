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

import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";

import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import React from "react";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Homecuid"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Homecuidador: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={homeloginscss.container}>
      <StatusBar hidden={true}></StatusBar>
      <Text>tala em construção</Text>
    </SafeAreaView>
  );
};
export default Homecuidador;
