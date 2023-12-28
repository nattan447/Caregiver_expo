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

import { useState, useEffect, useContext } from "react";
import { Clientedatacontext } from "../datacontext/clitentedata";
import homeloginscss from "../../../../estilos/homeloginscss";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
import { RootStackParamListContratar } from "./contratarnavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type ContratarScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "Contratar"
>;

type Navigationprops = {
  navigation: ContratarScreenNavigationProp;
};

const ContratarClie: React.FC<Navigationprops> = ({ navigation }) => {
  const cuidadordataState: Clientedatainterfc | undefined =
    useContext(Clientedatacontext);
  const Irperfil = (): void => {
    navigation.navigate("perfil", cuidadordataState);
  };

  useEffect(() => {
    console.log(cuidadordataState);
  }, []);
  return (
    <View style={homeloginscss.container}>
      <Text>Contratar</Text>
      <Button onPress={Irperfil} title="contrate"></Button>
    </View>
  );
};
export { ContratarClie };
