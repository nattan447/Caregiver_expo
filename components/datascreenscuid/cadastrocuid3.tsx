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
import { Cuidadadordatainterfc } from "../interfacests/cuidadordata";
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
  const [cuidadordata, SetCuidadordata] = useState<Cuidadadordatainterfc>({
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

  const [ArrayEstado, SetArrayEstado] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) =>
        data.map((estado: any) => {
          let accestado: string = estado.nome;
          SetArrayEstado((current) => [...current, estado.nome]);
        })
      )
      .catch((erro) =>
        console.log(erro + "ocorreu o erro ao carregar os dados da api")
      );
    if (route.params) {
      const { datacuidadorOBJ }: { datacuidadorOBJ?: Cuidadadordatainterfc } =
        route.params;
      if (datacuidadorOBJ) {
        console.log(datacuidadorOBJ);
        SetCuidadordata(datacuidadorOBJ);
      }
    }
  }, []);
  const [EstadoValue, SetEstadoValue] = useState<string>("defaltu");
  function handelEstado(Estado: string) {
    if (Estado != null) {
      SetEstadoValue(Estado);
    }

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

  const goHomescreen = (): void => {
    const ArrayCuidadordata: (number | string)[][] =
      Object.entries(cuidadordata);
    const values = Object.values(cuidadordata);
    console.log(values);
    if (values.length >= 8) {
      navigation.navigate("Homenavigator", { cuidadordata });
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <ScrollView>
          <Combobox
            textabove="Estado"
            initialvalue={EstadoValue}
            onchange={handelEstado}
            arrayvalues={ArrayEstado}
          />
          <Inputs
            nometxt="cidade "
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
            nometxt="rua "
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
            nometxt="cep "
            placeholder=""
            value={cuidadordata.cep}
            onchangevalue={handlecep}
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
            pres={goHomescreen}
            fontsize={16}
            altura={32}
            largura={100}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador3;
