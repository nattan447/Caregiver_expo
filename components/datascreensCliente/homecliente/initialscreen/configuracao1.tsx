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
  "configuracao"
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
}: propsFromAuthenticScreen | propsFromInitialScreen) => {
  const ClientedataState: Clientedatainterfc | undefined =
    useContext(Clientedatacontext);

  const ImageUri = ClientedataState?.profileimg;

  return (
    <View style={ConfiguracaoStyle.container}>
      <HeaderConfig
        profileImageUrl={
          ImageUri
            ? { uri: ClientedataState?.profileimg }
            : require("../../../../assets/user.png")
        }
        userName={ClientedataState?.nome as string}
        profession="Cliente"
      />
      <View style={ConfiguracaoStyle.main}>
        <ActionBarConfig
          onPress={() => {
            navigation.navigate("configPerfil"); //tenho union types no navigation, então o ts não consegue identificar qual rota eu quero especificar
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
            navigation.navigate("Autenticacaocli");
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
