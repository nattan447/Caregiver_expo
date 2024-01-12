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

import { useState } from "react";

import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";

import { AuthenticRootParamList } from "../../types/authenticRoot";

import { Btn } from "../../desginscomponents/authenticheadrs";

import homeloginscss from "../../estilos/homeloginscss";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import React from "react";

type PropsAuthenticCli = NativeStackScreenProps<
  AuthenticRootParamList,
  "Autenticacaocli"
>;

const Autenticacaocli = ({ navigation }: PropsAuthenticCli) => {
  const irpaginacuidador = (): void => {
    navigation.navigate("Autenticacaocuid");
  };

  const irentrarcliente = (): void => {
    navigation.navigate("entrarcliente");
  };

  const cadastrarCliente = (): void => {
    navigation.navigate("cadastrocliente");
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <StatusBar hidden={true}></StatusBar>
      <Authenticheadrs
        arrowimg={require("../../assets/arrowhead.png")}
        imgheader={require("../../assets/sejacliente.png")}
        headertxt="SEJA UM CLIENTE"
        trocarmodo={irpaginacuidador}
        ladoseta="flex-end"
      />

      <View style={homeloginscss.blocoprincipal}>
        <Text style={homeloginscss.blocoprincipaltxt}>Caregiver</Text>
        <Text style={homeloginscss.blocoprincipaltxt2}>Bem vindo</Text>
        <Text style={homeloginscss.blocoprincipaltxt3}>
          Se cadastre ou entre em uma conta e venha entrar nessa jornada conosco
          !
        </Text>

        <View style={homeloginscss.btndivs}>
          <Btn
            cor="#C77B43"
            txtbtn="ENTRAR"
            txtcor="#FFFCFC"
            pres={irentrarcliente}
            fontsize={16}
            altura={48}
            largura={131}
          />
          <Btn
            cor="#F1EBEB"
            txtbtn="CADASTRAR"
            txtcor="#C77B43"
            pres={cadastrarCliente}
            fontsize={16}
            altura={48}
            largura={131}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Autenticacaocli;
