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
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";
type PerfilScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "perfil"
>;
type Navigationprops = {
  navigation: PerfilScreenNavigationProp;
  route: RouteProp<RootStackParamListContratar, "perfil">;
};
const Perfil: React.FC<Navigationprops> = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params) {
      const cuidadordataState: Cuidadadordatainterfc = route.params;
    }
  }, []);
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
