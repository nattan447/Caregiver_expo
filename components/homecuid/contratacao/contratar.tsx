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
import Caredatacontext from "../usercontext/caredata";

import { useState, useEffect, useContext } from "react";
import homeloginscss from "../../../estilos/homeloginscss";
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";
import { RootStackParamListContratar } from "./contratarnavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchbarHome } from "../../homecomponents/searchbar";
type ContratarScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "Contratar"
>;

type Navigationprops = {
  navigation: ContratarScreenNavigationProp;
};

import React from "react";

const Contratar: React.FC<Navigationprops> = ({ navigation }) => {
  const cuidadordataState: Cuidadadordatainterfc | undefined =
    useContext(Caredatacontext);
  const Irperfil = (): void => {
    navigation.navigate("perfil", cuidadordataState);
  };

  useEffect(() => {
    console.log(cuidadordataState);
  }, []);
  return (
    <View style={homeloginscss.container}>
      <Text>a</Text>
      <SearchbarHome />
      <Button onPress={Irperfil} title="contrate"></Button>
    </View>
  );
};
export default Contratar;
