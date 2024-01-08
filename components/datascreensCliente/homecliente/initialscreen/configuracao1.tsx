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
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Autenticacaocli"
>;
type InitialScreenNavigationProp = NativeStackNavigationProp<
  InitialScreenParamList,
  "configPerfil"
>;
type propsFromInitialScreen = {
  navigation: InitialScreenNavigationProp;
};
type propsFromAuthenticScreen = {
  navigation: AuthenticScreenNavigationProp;
};

const ConfiguracaoCli = ({
  navigation,
}: propsFromInitialScreen | propsFromAuthenticScreen) => {
  //não consigo resolver o problema de tipagem dessa variável
  const dataFromContextCli = useContext(Clientedatacontext);
  const { clienteData }: any = dataFromContextCli;
  const clienteDataTyped: Clientedatainterfc = clienteData;

  const ImageUri = clienteData?.profileimg;
  //especificação das rotas de navegação
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
  return (
    <View style={ConfiguracaoStyle.container}>
      <HeaderConfig
        profileImageUrl={
          ImageUri
            ? { uri: clienteDataTyped?.profileimg }
            : require("../../../../assets/user.png")
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
          onPress={() => {}}
          iconUrl={require("../../../../assets/depIcon.png")}
          arrowUrl={require("../../../../assets/arrowgray.png")}
          txt="Editar Dep."
        />
        <ActionBarConfig
          onPress={() => {
            if (!isInitalScreenNavigation(navigation)) {
              navigation.navigate("Autenticacaocli");
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
