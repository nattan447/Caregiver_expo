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

import { useState, useEffect } from "react";

import homeloginscss from "../../../../estilos/homeloginscss";

import { contratarRootParams } from "../../../../types/contratarRootParams";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

type PropsPagamentoCli = NativeStackScreenProps<
  InitialScreenParamList,
  "pagamentoInfo"
>;

const PagamentoinfoCli = ({ navigation, route }: PropsPagamentoCli) => {
  useEffect(() => {
    if (route.params) {
      console.log("possui dados nos parametros");

      console.log(route.params.horario?.toLocaleString());
    } else {
      console.error("não possui dados nos parametros");
    }
  }, []);

  return (
    <View style={pagamentoSyle.container}>
      <Text style={pagamentoSyle.headerTxt}>Informações de Pagamento</Text>
    </View>
  );
};
export { PagamentoinfoCli };

const pagamentoSyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerTxt: {
    color: "#C77B43",
    fontSize: 24,
    marginTop: "4%",
  },
});
