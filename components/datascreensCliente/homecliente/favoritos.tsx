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
import { Authenticheadrs } from "../../../desginscomponents/authenticheadrs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Clientedatacontext } from "./datacontext/clitentedata";
import React from "react";
const FavoritosCli = () => {
  const cuidadordataState = useContext(Clientedatacontext);
  useEffect(() => {
    console.log(cuidadordataState);
  }, []);
  return (
    <View style={homeloginscss.container}>
      <Text>Favoritos</Text>
    </View>
  );
};
export { FavoritosCli };
