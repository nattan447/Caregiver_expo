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
import { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeloginscss from "../../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import homesty from "../../../homecuid/estiloscuid/homesty";
import React from "react";
import { RootTabParamList } from "../tabhomecli";
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
  const ClientedataState: Clientedatainterfc | undefined =
    useContext(Clientedatacontext);
  return (
    <SafeAreaView style={homeloginscss.container}>
      <HeaderInitial
        configBtnAct={() => navigation.navigate("configuracaoCli")}
      />

      <MainInitialScreen
        profileImgId={
          ClientedataState?.profileimg
            ? { uri: ClientedataState?.profileimg }
            : require("../../../../assets/user.png")
        }
        userName={ClientedataState?.nome as string}
      />
    </SafeAreaView>
  );
};
export default Homecliente;
