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
type PropsPagamentoCli = NativeStackScreenProps<
  contratarRootParams,
  "pagamentoinfo"
>;

const PagamentoinfoCli = ({ navigation }: PropsPagamentoCli) => {
  return (
    <View style={homeloginscss.container}>
      <Text>pagamento</Text>
    </View>
  );
};
export { PagamentoinfoCli };
