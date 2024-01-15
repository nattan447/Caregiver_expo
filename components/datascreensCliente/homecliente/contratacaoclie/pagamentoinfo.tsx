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

import { InitialScreenParamList } from "../../../../types/initialScreenType";

type PropsPagamentoCli = NativeStackScreenProps<
  InitialScreenParamList,
  "pagamentoInfo"
>;

const PagamentoinfoCli = ({ navigation }: PropsPagamentoCli) => {
  return (
    <View style={homeloginscss.container}>
      <Text>pagamento</Text>
    </View>
  );
};
export { PagamentoinfoCli };
