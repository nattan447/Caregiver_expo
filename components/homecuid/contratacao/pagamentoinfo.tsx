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
type PagamentoinfoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "pagamentoinfo"
>;
type Navigationprops = {
  navigation: PagamentoinfoScreenNavigationProp;
};
const Pagamentoinfo: React.FC<Navigationprops> = ({ navigation }) => {
  return (
    <View style={homeloginscss.container}>
      <Text>pagamento</Text>
    </View>
  );
};
export default Pagamentoinfo;
