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
  let Datacuidador: (string | number)[][] = [];
  const Voltar = (): undefined => {
    navigation.navigate("Homecuidador");
  };
  function handlenome(texto: string): void {
    const indexatual = Datacuidador.findIndex((item) => item[0] === "nome");
    if (texto != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.nome) {
        //tem dados
        console.log(indexatual);
        console.log("ta puxando o cheio");
        Datacuidador[indexatual] = ["nome", texto];
      } else {
        // não tem dados
        console.log("to púxando o vazio");
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
        console.log(indexatual);
        console.log("ta puxando o cheio");
        Datacuidador[indexatual] = ["sobrenome", Sobrenome];
      } else {
        // não tem dados
        console.log("to púxando o vazio");
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
        console.log(indexatual);
        console.log("ta puxando o cheio");
        Datacuidador[indexatual] = ["email", Email];
      } else {
        // não tem dados
        console.log("to púxando o vazio");
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
        console.log(indexatual);
        console.log("ta puxando o cheio");
        Datacuidador[indexatual] = ["senha", Senha];
      } else {
        // não tem dados
        console.log("to púxando o vazio");
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
        console.log(indexatual);
        console.log("ta puxando o cheio");
        Datacuidador[indexatual] = ["profissao", Profissao];
      } else {
        // não tem dados
        console.log("to púxando o vazio");
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
        console.log(indexatual);
        console.log("ta puxando existente");
        Datacuidador[indexatual] = ["descricao", Descricao];
      } else {
        // não tem dados
        console.log("to púxando o vazio");
        Datacuidador.push(["descricao", Descricao]);
      }
    }
  }
  const [WarnEmail, SetWarnEmail] = useState<string>("");
  const gosecondstep = (): undefined => {
    console.log(Datacuidador);
    navigation.navigate("Cadastrocuidador2", { Datacuidador });
    // let couterdatas: number = 0;
    // const values = Object.values(cuidadordata);
    // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (regex.test(cuidadordata.email)) {
    //   SetWarnEmail("");
    //   for (let i = 0; i < values.length; i++) {
    //     if (values[i] != "") {
    //       couterdatas += 1;
    //     }
    //   }
    // } else {
    //   SetWarnEmail("digite um email válido");
    // }
    // if (couterdatas === 6) {
    //   //nagegação aqui
    // } else {
    //   alert("preencha todos os dados");
    // }
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
            placeholder=""
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
