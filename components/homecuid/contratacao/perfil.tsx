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
import React from "react";

import { useState } from "react";
import homeloginscss from "../../../estilos/homeloginscss";
import { RootStackParamListContratar } from "./contratarnavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type PerfilScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "perfil"
>;
type Navigationprops = {
  navigation: PerfilScreenNavigationProp;
};
const Perfil: React.FC<Navigationprops> = ({ navigation }) => {
  const solicitar = (): void => {
    navigation.navigate("infocontato");
  };
  return (
    <View style={homeloginscss.container}>
      <Text>perfil</Text>
      <Button onPress={solicitar} title="SOLICITAR"></Button>
    </View>
  );
};
export default Perfil;
