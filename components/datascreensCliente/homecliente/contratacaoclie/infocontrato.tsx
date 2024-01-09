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
import homeloginscss from "../../../../estilos/homeloginscss";
import { contratarRootParams } from "../../../../types/contratarRootParams";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type PropsInfoContrato = NativeStackScreenProps<
  contratarRootParams,
  "infocontrato"
>;

const InfocontratoCli = ({ navigation }: PropsInfoContrato) => {
  const gopagamento = (): void => {
    navigation.navigate("pagamentoinfo");
  };

  return (
    <View style={homeloginscss.container}>
      <Text>inforcontrato</Text>
      <Button onPress={gopagamento} title="proximo"></Button>
    </View>
  );
};
export { InfocontratoCli };
