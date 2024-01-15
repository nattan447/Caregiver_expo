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

import homeloginscss from "../../../../estilos/homeloginscss";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

type PropsInfoContrato = NativeStackScreenProps<
  InitialScreenParamList,
  "infoContrato"
>;

const InfoContratoCli = ({ navigation }: PropsInfoContrato) => {
  const gopagamento = () => {
    navigation.navigate("pagamentoInfo");
  };

  return (
    <View style={homeloginscss.container}>
      <Text>inforcontrato</Text>
      <Button onPress={gopagamento} title="proximo"></Button>
    </View>
  );
};

export { InfoContratoCli };
