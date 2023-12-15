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
import React, { useEffect } from "react";

import { useState } from "react";
import homeloginscss from "../../../estilos/homeloginscss";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamListContratar } from "./contratarnavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type PerfilScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "perfil"
>;
type Navigationprops = {
  navigation: PerfilScreenNavigationProp;
  route: RouteProp<RootStackParamListContratar, "perfil">;
};
const Perfil: React.FC<Navigationprops> = ({ navigation, route }) => {
  const solicitar = (): void => {
    navigation.navigate("infocontato");
  };
  useEffect(() => {
    if (route.params) {
      const { cuidadordataState } = route.params;
      console.log(cuidadordataState);
    }
  }, []);
  return (
    <View style={homeloginscss.container}>
      <Text>perfil</Text>
      <Button onPress={solicitar} title="SOLICITAR"></Button>
    </View>
  );
};
export default Perfil;
