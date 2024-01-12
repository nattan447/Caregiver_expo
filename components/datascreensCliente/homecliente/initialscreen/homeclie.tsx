import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import { useState, useEffect, useContext } from "react";
import homeloginscss from "../../../../estilos/homeloginscss";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Clientedatacontext } from "../datacontext/clitentedata";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
import { InitialScreenParamList } from "../../../../types/initialScreenType";
import { HeaderInitial } from "../../../homecomponents/initialScreenComp/headerInitial";
import { MainInitialScreen } from "../../../homecomponents/initialScreenComp/mainInitialScreen";

type HomeCuidInitialProps = NativeStackScreenProps<
  InitialScreenParamList,
  "homeCliente"
>;
const Homecliente = ({ route, navigation }: HomeCuidInitialProps) => {
  const { clienteData, setClienteData }: any = useContext(Clientedatacontext);
  const clienteDataTyped: Clientedatainterfc = clienteData;
  return (
    <SafeAreaView style={homeloginscss.container}>
      <HeaderInitial
        configBtnAct={() => navigation.navigate("configuracaoCli")}
      />
      <MainInitialScreen
        profileImgId={
          clienteDataTyped?.profileimg
            ? { uri: clienteDataTyped?.profileimg }
            : require("../../../../assets/modelFace.jpg")
        }
        userName={clienteDataTyped?.nome as string}
        depPress={() => navigation.navigate("addDepCli")}
        notificationPress={() => navigation.navigate("notificationCli")}
      />
    </SafeAreaView>
  );
};
export default Homecliente;
