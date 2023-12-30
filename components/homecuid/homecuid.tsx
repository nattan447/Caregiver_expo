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
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import homesty from "./estiloscuid/homesty";
import React from "react";
import { RootTabParamList } from "./homenavigator";
import { RouteProp } from "@react-navigation/native";
import Caredatacontext from "./usercontext/caredata";
import { Cuidadadordatainterfc } from "../interfacests/cuidadordata";
import { HeaderInitial } from "../homecomponents/initialScreenComp/headerInitial";
import { MainInitialScreen } from "../homecomponents/initialScreenComp/mainInitialScreen";
type HomeCuidProp = NativeStackNavigationProp<RootTabParamList, "Home">;
type PropsHome = {
  navigation: HomeCuidProp;
  route: RouteProp<RootTabParamList, "Home">;
};

const Homecuid: React.FC<PropsHome> = ({ route }) => {
  const cuidadordataState: Cuidadadordatainterfc | undefined =
    useContext(Caredatacontext);
  return (
    <SafeAreaView style={homeloginscss.container}>
      <HeaderInitial configBtnAct={() => console.log(cuidadordataState)} />
      <MainInitialScreen
        profileImgId={
          cuidadordataState?.profileimg
            ? { uri: cuidadordataState?.profileimg }
            : require("../../assets/user.png")
        }
        userName={cuidadordataState?.nome as string}
      />
    </SafeAreaView>
  );
};
export default Homecuid;
