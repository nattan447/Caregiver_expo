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
import { AuthenticRootParamList } from "../../types/authenticRoot";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../estilos/cadastro";
import Inputs from "../../desginscomponents/inputs";
import { RouteProp } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import { Combobox } from "../../desginscomponents/inputs";

type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Cadastrocuidador3"
>;
type PropsNavCuidador2 = {
  navigation: AuthenticScreenNavigationProp;
  route: RouteProp<AuthenticRootParamList, "Cadastrocuidador3">;
};

const Cadastrocuidador3: React.FC<PropsNavCuidador2> = ({
  navigation,
  route,
}: PropsNavCuidador2) => {
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

  interface ApiIbgeInterface {
    id: number;
    nome: string;
    regiao: {
      id: number;
      nome: string;
      sigla: string;
    };
    sigla: string;
  }

  useEffect(() => {
    const fetchdata = async () => {
      const apiurl =
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
      const response = await fetch(apiurl);
      const data = await response.json();
      data.map((estado: ApiIbgeInterface) => {
        let accestado: string = estado.nome;
        SetArrayEstado((current) => [...current, estado.nome]);
      });
    };
    fetchdata();
    if (route.params) {
      const { datacuidadorOBJ }: { datacuidadorOBJ?: Cuidadadordatainterfc } =
        route.params;
      if (datacuidadorOBJ) {
        console.log(datacuidadorOBJ);
        SetCuidadordata(datacuidadorOBJ);
      }
    }
  }, []);

  const [EstadoValue, SetEstadoValue] = useState<string>("");
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
    const values = Object.values(cuidadordata);
    console.log(values);
    if (values.length > 8) {
      if (cuidadordata.cep) {
        console.log(cuidadordata.cep.length);
        if (cuidadordata.cep.length < 8) {
          alert("caracteres de cep insuficientes");
        } else {
          navigation.navigate("Homenavigator", cuidadordata);
        }
      } else navigation.navigate("Homenavigator", cuidadordata);
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <ScrollView automaticallyAdjustKeyboardInsets style={{ width: "100%" }}>
          <Combobox
            textabove="Estado"
            initialvalue={EstadoValue}
            onchange={handelEstado}
            arrayvalues={ArrayEstado}
          />
          <Inputs
            nometxt="cidade "
            placeholder="digite sua cidade"
            value={cuidadordata.cidade}
            onchangevalue={handlecidade}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={8}
            multiline={false}
          />
          <Inputs
            nometxt="rua "
            placeholder="digite sua rua"
            value={cuidadordata.rua}
            onchangevalue={handlerua}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={10}
            multiline={false}
          />
          <Inputs
            nometxt="cep "
            placeholder="digite seu cep"
            value={cuidadordata.cep}
            onchangevalue={handlecep}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={10}
            multiline={false}
          />

          <Btn
            cor="#F1EBEB"
            txtbtn="cadastrar"
            txtcor="#C77B43"
            pres={goHomescreen}
            fontsize={16}
            altura={40}
            largura={100}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador3;
