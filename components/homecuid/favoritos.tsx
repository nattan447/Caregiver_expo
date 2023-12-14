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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import React from "react";

const Favoritos = () => {
  return (
    <View style={homeloginscss.container}>
      <Text>Favoritos</Text>
    </View>
  );
};
export default Favoritos;
