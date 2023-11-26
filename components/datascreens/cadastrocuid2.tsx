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
import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../estilos/cadastro";
import Inputs from "../../desginscomponents/inputs";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Cadastrocuidador"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Cadastrocuidador: React.FC<Props> = ({ navigation }) => {
  const [txt, settxt] = useState<string>("");
  interface Cuidadordata {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
  }
  const [cuidadordata, Setdata] = useState<Cuidadordata>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  });

  const voltarautentic = (): undefined => {
    navigation.navigate("Homecuidador");
  };

  function handlenome(texto: string): void {
    Setdata({
      nome: texto,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
    });
  }
  function handlesobrenome(Sobrenome: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: Sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
    });
  }
  function handleemail(Email: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: Email,
      senha: cuidadordata.senha,
    });
  }
  function handlesenha(Senha: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: Senha,
    });
  }
  const a = (): undefined => {
    alert("ola");
  };
  return (
    <SafeAreaView style={homeloginscss.container}>
      <Authenticheadrs
        arrowimg={require("../../assets/arrowheadleft.png")}
        imgheader={require("../../assets/dogwoman.png")}
        headertxt="CRIAR CONTA"
        trocarmodo={voltarautentic}
        ladoseta="flex-start"
      />

      <View style={cadastro.cadastroview}>
        <ScrollView>
          <Inputs
            nometxt="nome *"
            placeholder=""
            value={cuidadordata.nome}
            onchangevalue={handlenome}
            issenha={false}
          />
          <Inputs
            nometxt="sobrenome *"
            placeholder=""
            value={cuidadordata.sobrenome}
            onchangevalue={handlesobrenome}
            issenha={false}
          />
          <Inputs
            nometxt="email * "
            placeholder=""
            value={cuidadordata.email}
            onchangevalue={handleemail}
            issenha={false}
          />
          <Inputs
            nometxt="senha *"
            placeholder=""
            value={cuidadordata.senha}
            onchangevalue={handlesenha}
            issenha={true}
          />
          <Inputs
            nometxt="profissão *"
            placeholder=""
            value={cuidadordata.senha}
            onchangevalue={handlesenha}
            issenha={true}
          />
          <Inputs
            nometxt="descrição"
            placeholder=""
            value={cuidadordata.senha}
            onchangevalue={handlesenha}
            issenha={true}
          />
          <Btn
            cor="#F1EBEB"
            txtbtn="próximo"
            txtcor="#C77B43"
            pres={a}
            fontsize={16}
            altura={32}
            largura={200}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador;
