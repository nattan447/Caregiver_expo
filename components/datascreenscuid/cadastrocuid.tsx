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
import { Picker } from "@react-native-picker/picker";

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
  let Datacuidador: (string | number)[][] = [];
  const Voltar = (): void => {
    navigation.navigate("Autenticacaocuid");
  };
  function handlenome(texto: string): void {
    const indexatual = Datacuidador.findIndex((item) => item[0] === "nome");
    if (texto != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.nome) {
        //tem dados

        Datacuidador[indexatual] = ["nome", texto];
      } else {
        // não tem dados

        Datacuidador.push(["nome", texto]);
      }
    }
  }
  function handlesobrenome(Sobrenome: string): void {
    const indexatual = Datacuidador.findIndex(
      (item) => item[0] === "sobrenome"
    );
    if (Sobrenome != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.sobrenome) {
        //tem dados

        Datacuidador[indexatual] = ["sobrenome", Sobrenome];
      } else {
        // não tem dados
        Datacuidador.push(["sobrenome", Sobrenome]);
      }
    }
  }
  function handleemail(Email: string): void {
    const indexatual = Datacuidador.findIndex((item) => item[0] === "email");
    if (Email != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.email) {
        //tem dados

        Datacuidador[indexatual] = ["email", Email];
      } else {
        // não tem dados
        Datacuidador.push(["email", Email]);
      }
    }
  }
  function handlesenha(Senha: string): void {
    const indexatual = Datacuidador.findIndex((item) => item[0] === "senha");
    if (Senha != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.senha) {
        //tem dados

        Datacuidador[indexatual] = ["senha", Senha];
      } else {
        // não tem dados

        Datacuidador.push(["senha", Senha]);
      }
    }
  }
  function handleprofissao(Profissao: string): void {
    const indexatual = Datacuidador.findIndex(
      (item) => item[0] === "profissao"
    );
    if (Profissao != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.profissao) {
        //tem dados

        Datacuidador[indexatual] = ["profissao", Profissao];
      } else {
        // não tem dados

        Datacuidador.push(["profissao", Profissao]);
      }
    }
  }
  function handledescricao(Descricao: string): void {
    const indexatual = Datacuidador.findIndex(
      (item) => item[0] === "descricao"
    );
    if (Descricao != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.descricao) {
        //tem dados

        Datacuidador[indexatual] = ["descricao", Descricao];
      } else {
        // não tem dados

        Datacuidador.push(["descricao", Descricao]);
      }
    }
  }

  // const Warnemail = useRef<string>("");
  const gosecondstep = (): void => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const DatacuidadorObj = Object.fromEntries(Datacuidador);
    const values = Object.values(DatacuidadorObj);

    if (Datacuidador.length === 6) {
      if (regex.test(DatacuidadorObj.email)) {
        navigation.navigate("Cadastrocuidador2", { DatacuidadorObj });
      } else {
        alert("digite o modelo de email certo");
      }
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
        trocarmodo={Voltar}
        ladoseta="flex-start"
      />

      <View style={cadastro.cadastroview}>
        <ScrollView>
          <Inputs
            value=""
            nometxt="nome *"
            placeholder=""
            onchangevalue={handlenome}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={40}
          />
          <Inputs
            nometxt="sobrenome *"
            value={"nada"}
            placeholder=""
            onchangevalue={handlesobrenome}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={40}
          />

          <Inputs
            value={"nada"}
            nometxt="email * "
            placeholder={"digite seu email"}
            onchangevalue={handleemail}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn={"nada"}
            type="email-address"
            length={30}
          />
          <Inputs
            value={"nada"}
            nometxt="senha *"
            placeholder=""
            onchangevalue={handlesenha}
            issenha={true}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={10}
          />
          <Inputs
            value={"nada"}
            nometxt="profissão *"
            placeholder=""
            onchangevalue={handleprofissao}
            issenha={false}
            tamanho={{ height: 30 }}
            emailwarn=""
            type="default"
            length={20}
          />
          <Inputs
            value={"nada"}
            nometxt="descrição"
            placeholder=""
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
