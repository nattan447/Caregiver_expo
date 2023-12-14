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
type InfocontatoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "infocontato"
>;
type Navigationprops = {
  navigation: InfocontatoScreenNavigationProp;
};
const Infocontato: React.FC<Navigationprops> = ({ navigation }) => {
  const gopagamento = (): void => {
    navigation.navigate("pagamentoinfo");
  };

  return (
    <View style={homeloginscss.container}>
      <Text>inforcontato</Text>
      <Button onPress={gopagamento} title="proximo"></Button>
    </View>
  );
};
export default Infocontato;
