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
  Easing,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../estilos/cadastro";
import Inputs from "../../desginscomponents/inputs";
import { RouteProp } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import { Combobox } from "../../desginscomponents/inputs";

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
    estado: string;
    cidade: string;
    rua: string;
    cep: string;
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
    estado: "",
    cidade: "",
    rua: "",
    cep: "",
  });

  const [Estado, SetEstado] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) =>
        data.map((estado: any) => {
          let accestado: string = estado.nome;
          SetEstado((current) => [...current, estado.nome]);
        })
      )
      .catch((erro) => console.log(erro + "ocorreu o erro"));
    if (route.params) {
      const { DataCuidador }: any = route.params;
      SetCuidadordata(DataCuidador);
      console.log(DataCuidador);
    }
  }, []);

  function handelEstado(Estado: string) {
    SetCuidadordata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: cuidadordata.profileimg,
      cpf: cuidadordata.cpf,
      datanasc: cuidadordata.datanasc,
      estado: Estado,
      cidade: cuidadordata.cidade,
      rua: cuidadordata.rua,
      cep: cuidadordata.cep,
    });
  }

  function handlecidade(Cidade: string) {
    SetCuidadordata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: cuidadordata.profileimg,
      cpf: cuidadordata.cpf,
      datanasc: cuidadordata.datanasc,
      estado: cuidadordata.estado,
      cidade: Cidade,
      rua: cuidadordata.rua,
      cep: cuidadordata.cep,
    });
  }

  function handlerua(Rua: string) {
    SetCuidadordata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: cuidadordata.profileimg,
      cpf: cuidadordata.cpf,
      datanasc: cuidadordata.datanasc,
      estado: cuidadordata.estado,
      cidade: cuidadordata.cidade,
      rua: Rua,
      cep: cuidadordata.cep,
    });
  }

  function handlecep(Cep: string) {
    SetCuidadordata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: cuidadordata.profileimg,
      cpf: cuidadordata.cpf,
      datanasc: cuidadordata.datanasc,
      estado: cuidadordata.estado,
      cidade: cuidadordata.cidade,
      rua: cuidadordata.rua,
      cep: Cep,
    });
  }

  const [selectedValue, setSelectedValue] = useState("");

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
          value={cuidadordata.estado}
          onchangevalue={handelEstado}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="default"
          length={11}
        />
        <Inputs
          nometxt="cidade *"
          placeholder=""
          value={cuidadordata.cidade}
          onchangevalue={handlecidade}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="default"
          length={10}
        />
        <Inputs
          nometxt="rua *"
          placeholder=""
          value={cuidadordata.rua}
          onchangevalue={handlerua}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="default"
          length={10}
        />
        <Inputs
          nometxt="cep *"
          placeholder=""
          value={cuidadordata.cep}
          onchangevalue={handlecep}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="numeric"
          length={10}
        />
        <Combobox
          initialvalue={selectedValue}
          onchange={setSelectedValue}
          arrayvalues={Estado}
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
