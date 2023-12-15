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
import { useEffect, useState, useContext } from "react";

import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Caredatacontext from "./usercontext/caredata";

import React from "react";

const Favoritos = () => {
  const cuidadordataState = useContext(Caredatacontext);
  useEffect(() => {
    console.log(cuidadordataState);
  }, []);
  return (
    <View style={homeloginscss.container}>
      <Text>Favoritos</Text>
    </View>
  );
};
export default Favoritos;
