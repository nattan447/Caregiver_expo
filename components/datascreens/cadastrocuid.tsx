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
import { useState, useEffect, useRef } from "react";
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
  interface Cuidadordata {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    profissao: string;
    descricao: string;
    profileimg: string;
    cpf: string;
    datanasc: string;
  }
  const [cuidadordata, Setdata] = useState<Cuidadordata>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    profissao: "",
    descricao: "",
    profileimg: "",
    cpf: "",
    datanasc: "",
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
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: "",
      cpf: "",
      datanasc: "",
    });
  }
  function handlesobrenome(Sobrenome: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: Sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: "",
      cpf: "",
      datanasc: "",
    });
  }
  function handleemail(Email: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: Email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: "",
      cpf: "",
      datanasc: "",
    });
  }
  function handlesenha(Senha: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: Senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: "",
      cpf: "",
      datanasc: "",
    });
  }
  function handleprofissao(Profissao: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: Profissao,
      descricao: cuidadordata.descricao,
      profileimg: "",
      cpf: "",
      datanasc: "",
    });
  }
  function handledescricao(Descricao: string): void {
    Setdata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: Descricao,
      profileimg: "",
      cpf: "",
      datanasc: "",
    });
  }
  const [WarnEmail, SetWarnEmail] = useState<string>("");
  const gosecondstep = (): undefined => {
    navigation.navigate("Cadastrocuidador2", { cuidadordata });
    let couterdatas: number = 0;
    const values = Object.values(cuidadordata);
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(cuidadordata.email)) {
      SetWarnEmail("");
      for (let i = 0; i < values.length; i++) {
        if (values[i] != "") {
          couterdatas += 1;
        }
      }
    } else {
      SetWarnEmail("digite um email válido");
    }
    if (couterdatas === 6) {
      //nagegação aqui
    } else {
      alert("preencha todos os dados");
    }
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
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <Inputs
            nometxt="nome *"
            placeholder=""
            value={cuidadordata.nome}
            onchangevalue={handlenome}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={40}
          />
          <Inputs
            nometxt="sobrenome *"
            placeholder=""
            value={cuidadordata.sobrenome}
            onchangevalue={handlesobrenome}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={40}
          />

          <Inputs
            nometxt="email * "
            placeholder={WarnEmail}
            value={cuidadordata.email}
            onchangevalue={handleemail}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn={WarnEmail}
            type="email-address"
            length={30}
          />
          <Inputs
            nometxt="senha *"
            placeholder=""
            value={cuidadordata.senha}
            onchangevalue={handlesenha}
            issenha={true}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={10}
          />
          <Inputs
            nometxt="profissão *"
            placeholder=""
            value={cuidadordata.profissao}
            onchangevalue={handleprofissao}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={20}
          />
          <Inputs
            nometxt="descrição"
            placeholder=""
            value={cuidadordata.descricao}
            onchangevalue={handledescricao}
            issenha={false}
            tamanho={{ height: 90 }}
            emailwarn=""
            type="default"
            length={80}
          />
          <Btn
            cor="#F1EBEB"
            txtbtn="próximo"
            txtcor="#C77B43"
            pres={gosecondstep}
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
