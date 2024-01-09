import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Caredatacontext from "../usercontext/caredata";
import { useState, useEffect, useContext } from "react";
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";
import { RootStackParamListContratar } from "./contratarnavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SearchbarHome } from "../../homecomponents/contratarComponents/searchbar";
type PropsContratar = NativeStackScreenProps<
  RootStackParamListContratar,
  "Contratar"
>;
const Contratar = ({ navigation }: PropsContratar) => {
  const cuidadordataState: Cuidadadordatainterfc | undefined =
    useContext(Caredatacontext);
  const Irperfil = (): void => {
    navigation.navigate("perfil", cuidadordataState);
  };

  useEffect(() => {
    console.log(cuidadordataState);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>a</Text>
      <SearchbarHome />
      <Button onPress={Irperfil} title="contrate"></Button>
    </View>
  );
};
export default Contratar;
