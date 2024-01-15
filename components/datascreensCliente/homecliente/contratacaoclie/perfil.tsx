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

import homeloginscss from "../../../../estilos/homeloginscss";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Clientedatainterfc } from "../../../interfacests/clienteInterface";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

type PropsPerfilContratado = NativeStackScreenProps<
  InitialScreenParamList,
  "perfilContratado"
>;

const PerfilContratado = ({ navigation, route }: PropsPerfilContratado) => {
  useEffect(() => {
    if (route.params) {
      const cuidadordataState: Clientedatainterfc = route.params;
      console.log(route.params);
    }
  }, []);

  const solicitar = () => {
    navigation.navigate("infoContrato");
  };

  return (
    <View style={homeloginscss.container}>
      <Text>perfil</Text>
      <Button onPress={solicitar} title="SOLICITAR"></Button>
    </View>
  );
};
export { PerfilContratado };
