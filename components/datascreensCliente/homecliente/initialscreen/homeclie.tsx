import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeloginscss from "../../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import homesty from "../../../homecuid/estiloscuid/homesty";
import React from "react";
import { HomeTabParms } from "../../../../types/homeTabParams";
import { RouteProp } from "@react-navigation/native";
import { Clientedatacontext } from "../datacontext/clitentedata";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
import { InitialScreenParamList } from "../../../../types/initialScreenType";
import { HeaderInitial } from "../../../homecomponents/initialScreenComp/headerInitial";
import { MainInitialScreen } from "../../../homecomponents/initialScreenComp/mainInitialScreen";
type HomeCuidProp = NativeStackNavigationProp<
  InitialScreenParamList,
  "homecliente"
>;
type PropsHome = {
  navigation: HomeCuidProp;
  route: RouteProp<InitialScreenParamList, "homecliente">;
};
const Homecliente: React.FC<PropsHome> = ({ route, navigation }) => {
  const dataFromContextCli: Clientedatainterfc | undefined =
    useContext(Clientedatacontext);
  //não consigo resolver o problema de tipagem dessa variável
  const { clienteData, setClienteData }: any = dataFromContextCli;
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
            : require("../../../../assets/user.png")
        }
        userName={clienteDataTyped?.nome as string}
        depPress={() => navigation.navigate("addDepCli")}
        notificationPress={() => navigation.navigate("notificationCli")}
      />
    </SafeAreaView>
  );
};
export default Homecliente;
