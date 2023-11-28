import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../estilos/cadastro";
import Inputs from "../../desginscomponents/inputs";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Cadastrocuidador2"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Cadastrocuidador2: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <Inputs
          nometxt="cpf *"
          placeholder=""
          value={1}
          onchangevalue={function () {
            alert("oi");
          }}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
        />
        <TouchableOpacity>
          <Text>Foto de perfil</Text>
          <View style={cadastro.inputimg}></View>
        </TouchableOpacity>
        <Inputs
          nometxt="data de nascimento *"
          placeholder="Ex: dd/mm/yy"
          value={1}
          onchangevalue={function () {
            alert("oi");
          }}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="próximo"
          txtcor="#C77B43"
          pres={() => {}}
          fontsize={16}
          altura={32}
          largura={100}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador2;
