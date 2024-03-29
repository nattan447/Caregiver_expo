import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { useEffect, useState, useContext } from "react";

import React from "react";

import { ConfiguracaoStyle } from "./styles/configuracaostyle";

import { HeaderConfig } from "../../../homecomponents/initialScreenComp/configComponents/header";

import { ActionBarConfig } from "../../../homecomponents/initialScreenComp/configComponents/actionBar";

import { Clientedatacontext } from "../datacontext/clitentedata";

import { Clientedatainterfc } from "../../../interfacests/clienteInterface";

import { AuthenticRootParamList } from "../../../../types/authenticRoot";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Autenticacaocli"
>;

type InitialScreenNavigationProp = NativeStackNavigationProp<
  InitialScreenParamList,
  "configuracaoCli"
>;

type PropsConfigCli = {
  navigation: InitialScreenNavigationProp;
};

type PropsAuthenticScreen = {
  navigation: AuthenticScreenNavigationProp;
};

const ConfiguracaoCli = ({
  navigation,
}: PropsConfigCli | PropsAuthenticScreen) => {
  const { clienteData, setClienteData }: any = useContext(Clientedatacontext);

  const clienteDataTyped: Clientedatainterfc = clienteData;

  const isAuthenticScreenNavigation = (
    navigation: AuthenticScreenNavigationProp | InitialScreenNavigationProp
  ): navigation is AuthenticScreenNavigationProp => {
    return "Autenticacaocli" in navigation;
  };

  const isInitalScreenNavigation = (
    navigation: AuthenticScreenNavigationProp | InitialScreenNavigationProp
  ): navigation is InitialScreenNavigationProp => {
    return "configPerfil" in navigation;
  };

  const removeSavedData = async () => {
    const remove = await AsyncStorage.removeItem("clientData")
      .then(() => console.log("info user deletada"))
      .catch((error) => console.log("deu erro", error));
  };

  return (
    <View style={ConfiguracaoStyle.container}>
      <HeaderConfig
        profileImageUrl={
          clienteDataTyped?.profileimg
            ? { uri: clienteDataTyped?.profileimg }
            : require("../../../../assets/modelFace.jpg")
        }
        userName={clienteDataTyped?.nome as string}
        profession="Cliente"
      />
      <View style={ConfiguracaoStyle.main}>
        <ActionBarConfig
          onPress={() => {
            //tenho union types no navigation, então o ts não consegue identificar qual rota eu quero especificar
            if (!isAuthenticScreenNavigation(navigation)) {
              navigation.navigate("configPerfil");
            }
          }}
          iconUrl={require("../../../../assets/pinkuser.png")}
          arrowUrl={require("../../../../assets/arrowgray.png")}
          txt="Editar Perfil"
        />
        <ActionBarConfig
          onPress={() => {
            if (!isAuthenticScreenNavigation(navigation))
              navigation.navigate("configPerfilDep");
          }}
          iconUrl={require("../../../../assets/depIcon.png")}
          arrowUrl={require("../../../../assets/arrowgray.png")}
          txt="Editar Dep."
        />
        <ActionBarConfig
          onPress={() => {
            if (!isInitalScreenNavigation(navigation)) {
              navigation.navigate("Autenticacaocli");
              removeSavedData();
            }
          }}
          iconUrl={require("../../../../assets/singOut.png")}
          arrowUrl={require("../../../../assets/arrowgray.png")}
          txt="Sair"
        />
      </View>
    </View>
  );
};
export { ConfiguracaoCli };
