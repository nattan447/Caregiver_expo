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

type HomeCuidProp = NativeStackNavigationProp<RootTabParamList, "Home">;
type PropsHome = {
  navigation: HomeCuidProp;
  route: RouteProp<RootTabParamList, "Home">;
};

const Homecuid: React.FC<PropsHome> = ({ route }) => {
  interface CuidadordataInterface {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    profissao: string;
    descricao: string;
    profileimg: string;
    cpf: string;
    datanasc: string;
    estado: string;
    cidade: string;
    rua: string;
    cep: string;
  }
  const { cuidadordataState } = useContext(Caredatacontext);
  useEffect(() => {
    console.log(cuidadordataState);
  }, []);
  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={homesty.header}>
        <Text style={homesty.headertxt}>Caregiver</Text>
        <TouchableOpacity onPress={() => console.log(cuidadordataState)}>
          <Image
            source={require("../../assets/gear.png")}
            style={{
              left: "240%",
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={homesty.main}>
        <Image
          source={require("../../assets/user.png")}
          style={{ height: 90, width: 90 }}
        />
        <Text style={homesty.mainusername}>Nattan ferreira</Text>

        <TouchableOpacity style={homesty.btnwicons}>
          <Image
            source={require("../../assets/notifications.png")}
            style={{ height: 32, width: 32, right: "100%" }}
          />
          <Text style={homesty.btnwconstxt}>notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homesty.btnwicons}>
          <Image
            source={require("../../assets/add.png")}
            style={{ height: 27, width: 27, right: "100%" }}
          />
          <Text style={homesty.btnwconstxt}>Dependente</Text>
        </TouchableOpacity>

        <View style={homesty.avaliacoes}>
          <Text style={homesty.avaliacoestxt}>Avaliações</Text>
          <View style={homesty.avaliacao}>
            <Image
              source={require("../../assets/user.png")}
              style={{ height: 60, width: 60 }}
            />

            <Text style={{ left: 20 }}>gostei do app, nota 10!</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Homecuid;
