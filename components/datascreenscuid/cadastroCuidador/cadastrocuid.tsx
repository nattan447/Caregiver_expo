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
import { useState, useEffect, useRef, useMemo } from "react";
import { Authenticheadrs } from "../../../desginscomponents/authenticheadrs";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Combobox } from "../../../desginscomponents/inputs";
import cadastro from "../../../estilos/cadastro";
import Inputs from "../../../desginscomponents/inputs";
import { validatePathConfig } from "@react-navigation/native";
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Cadastrocuidador"
>;
type PropsNavCuidador = {
  navigation: AuthenticScreenNavigationProp;
};

const Cadastrocuidador: React.FC<PropsNavCuidador> = ({ navigation }) => {
  let Datacuidador = useMemo((): (string | number)[][] => {
    return [];
  }, []);
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
    } else {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.nome) {
        //tem dados
        Datacuidador[indexatual] = ["nome", "false"];
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
    } else {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.sobrenome) {
        //campo vazio
        Datacuidador[indexatual] = ["sobrenome", "false"];
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
    } else {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.email) {
        //campo vazio
        Datacuidador[indexatual] = ["email", "false"];
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
    } else {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.senha) {
        //campo vazio
        Datacuidador[indexatual] = ["senha", "false"];
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
    } else {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.descricao) {
        //campo vazio
        Datacuidador[indexatual] = ["descricao", "false"];
      }
    }
  }

  //combobox

  const [profissao, Setprofissao] = useState<string>("");
  function handleprofissao(Profissao: string) {
    Setprofissao(Profissao);
    const indexatual = Datacuidador.findIndex(
      (item) => item[0] === "profissao"
    );
    if (Profissao != null) {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.profissao) {
        //tem dados

        Datacuidador[indexatual] = ["profissao", Profissao];
      } else {
        // não tem dados

        Datacuidador.push(["profissao", Profissao]);
      }
    } else {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.profissao) {
        //campo vazio
        Datacuidador[indexatual] = ["profissao", "false"];
      }
    }
  }

  const gosecondstep = (): void => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const DatacuidadorObj = Object.fromEntries(Datacuidador);
    console.log(Datacuidador);
    if (Datacuidador.length === 6) {
      if (
        DatacuidadorObj.nome != "false" &&
        DatacuidadorObj.sobrenome != "false" &&
        DatacuidadorObj.senha != "false" &&
        DatacuidadorObj.profissao != "false" &&
        DatacuidadorObj.descricao != "false"
      ) {
        if (regex.test(DatacuidadorObj.email)) {
          navigation.navigate("Cadastrocuidador2", { DatacuidadorObj });
        } else {
          alert("digite o modelo de email certo");
        }
      } else console.log("preencha todos os dados");
    } else {
      console.log("preencha todos os dados");
    }
  };
  return (
    <SafeAreaView style={homeloginscss.container}>
      <ScrollView
        style={{ width: "100%" }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <Text style={cadastro.criarcontatxt}>Criar conta</Text>
        <Inputs
          value=""
          nometxt="nome *"
          placeholder="digite seu nome"
          onchangevalue={handlenome}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="default"
          length={40}
          multiline={false}
        />
        <Inputs
          nometxt="sobrenome *"
          value={"nada"}
          placeholder="digite seu sobrenome"
          onchangevalue={handlesobrenome}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="default"
          length={40}
          multiline={false}
        />

        <Inputs
          value={"nada"}
          nometxt="email * "
          placeholder={"digite seu email"}
          onchangevalue={handleemail}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn={"nada"}
          type="default"
          length={30}
          multiline={false}
        />
        <Inputs
          value={"nada"}
          nometxt="senha *"
          placeholder="digite sua senha"
          onchangevalue={handlesenha}
          issenha={true}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="default"
          length={10}
          multiline={false}
        />

        <Inputs
          value={""}
          nometxt="descrição"
          placeholder="breve descricão"
          onchangevalue={handledescricao}
          issenha={false}
          tamanho={{ height: 140 }}
          emailwarn=""
          type="default"
          length={300}
          multiline={true}
        />
        <Combobox
          textabove="profissão"
          initialvalue={profissao}
          onchange={handleprofissao}
          arrayvalues={[
            "Cuidador Pcd’s",
            "Cuidador idosos",
            "Cuidador pets",
            "Cuidador infantil",
          ]}
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="próximo"
          txtcor="#C77B43"
          pres={gosecondstep}
          fontsize={16}
          altura={40}
          largura={200}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastrocuidador;
