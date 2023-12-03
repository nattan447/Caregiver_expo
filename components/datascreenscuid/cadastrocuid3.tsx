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
import * as ImagePicker from "expo-image-picker";

import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../estilos/cadastro";
import Inputs from "../../desginscomponents/inputs";
import { RouteProp } from "@react-navigation/native";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Cadastrocuidador3"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
  route: RouteProp<RootStackParamList, "Cadastrocuidador3">;
};
const Cadastrocuidador3: React.FC<Props> = ({ navigation, route }: Props) => {
  interface Cuidadordatainterface {
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
  const [cuidadordata, SetCuidadordata] = useState<Cuidadordatainterface>({
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
  useEffect(() => {
    if (route.params) {
      const { DataCuidador }: any = route.params;
      SetCuidadordata(DataCuidador);
      console.log(DataCuidador);
    }
  }, []);

  function handlecpf(Cpf: string) {
    //formato para o cpf aceitar apenas números(strings), apenas
    // let datacpf = Cpf.split("");
    // if (Cpf.includes(".")) {
    //   let idx = Cpf.indexOf(".");
    //   datacpf.splice(idx, 1, "");
    // }
    // if (Cpf.includes("-")) {
    //   let idx = Cpf.indexOf("-");
    //   datacpf.splice(idx, 1, "");
    // }
    // if (Cpf.includes(",")) {
    //   let idx = Cpf.indexOf(",");
    //   datacpf.splice(idx, 1, "");
    // }
    // setDataCuidador({
    //   nome: DataCuidador.nome,
    //   sobrenome: DataCuidador.sobrenome,
    //   email: DataCuidador.email,
    //   senha: DataCuidador.senha,
    //   profissao: DataCuidador.profissao,
    //   descricao: DataCuidador.descricao,
    //   profileimg: DataCuidador.profileimg,
    //   cpf: typeof datacpf === "string" ? datacpf : datacpf.join(""),
    //   datanasc: DataCuidador.datanasc,
    // });
  }

  function handledatanasc(Data: string) {
    // setDataCuidador({
    //   nome: DataCuidador.nome,
    //   sobrenome: DataCuidador.sobrenome,
    //   email: DataCuidador.email,
    //   senha: DataCuidador.senha,
    //   profissao: DataCuidador.profissao,
    //   descricao: DataCuidador.descricao,
    //   profileimg: DataCuidador.profileimg, //uri
    //   cpf: DataCuidador.cpf,
    //   datanasc: Data.length === 5 || Data.length === 2 ? Data + "/" : Data,
    // });
  }

  const gonextpage = (): undefined => {
    // const values = Object.values(DataCuidador);
    // if (DataCuidador.cpf != "" && DataCuidador.datanasc != "") {
    //   alert("pode passar");
    // } else {
    //   alert("preenchar os campos orbigatórios");
    // }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <Inputs
          nometxt="Estado *"
          placeholder=""
          value={cuidadordata.datanasc}
          onchangevalue={() => {}}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="default"
          length={11}
        />

        <Inputs
          nometxt="cidade *"
          placeholder="Ex: dd/mm/yy"
          value={cuidadordata.datanasc}
          onchangevalue={() => {}}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="numeric"
          length={10}
        />

        <Inputs
          nometxt="rua *"
          placeholder="Ex: dd/mm/yy"
          value={cuidadordata.datanasc}
          onchangevalue={() => {}}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="default"
          length={10}
        />
        <Inputs
          nometxt="cep *"
          placeholder="Ex: dd/mm/yy"
          value={cuidadordata.datanasc}
          onchangevalue={() => {}}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="numeric"
          length={10}
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="cadastrar"
          txtcor="#C77B43"
          pres={gonextpage}
          fontsize={16}
          altura={32}
          largura={100}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador3;
