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
import { styles } from "../../desginscomponents/inputs";
import { useState, useEffect, useRef, useMemo } from "react";
import * as ImagePicker from "expo-image-picker";
import { TextInputMask } from "react-native-masked-text";
import { AuthenticRootParamList } from "../../types/authenticRoot";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../estilos/cadastro";
import Inputs from "../../desginscomponents/inputs";
import { RouteProp } from "@react-navigation/native";
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Cadastrocuidador2"
>;
type PropsNavCuidador2 = {
  navigation: AuthenticScreenNavigationProp;
  route: RouteProp<AuthenticRootParamList, "Cadastrocuidador2">;
};
const Cadastrocuidador2: React.FC<PropsNavCuidador2> = ({
  navigation,
  route,
}: PropsNavCuidador2) => {
  interface CuidadorDatainterface {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    profissao: string;
    descricao: string;
  }
  const [DataCuidadorState, setDataCuidadorState] =
    useState<CuidadorDatainterface>({
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      profissao: "",
      descricao: "",
    });

  useEffect(() => {
    if (route.params) {
      const { DatacuidadorObj }: { DatacuidadorObj?: CuidadorDatainterface } =
        route.params;
      if (DatacuidadorObj != undefined) {
        setDataCuidadorState(DatacuidadorObj);
      }
    }
  }, []);
  if (DataCuidadorState) {
    var Datacuidador: (string | number)[][] = Object.entries(DataCuidadorState);
  }
  let cpfRef = useRef<string | undefined>(undefined);
  function handlecpf(Cpf: string) {
    cpfRef.current = Cpf;
    const indexatual = Datacuidador.findIndex((item) => item[0] === "cpf");
    if (Cpf != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.cpf) {
        //tem dados
        Datacuidador[indexatual] = ["cpf", Cpf];
      } else {
        // não tem dados
        Datacuidador.push(["cpf", Cpf]);
      }
    }
  }

  const DateRef = useRef<string>("");
  const dateInputRefMask = useRef(null);
  function handledatenasc(
    Date: string,
    formatted: any,
    extracted?: string | undefined
  ) {
    DateRef.current = Date;
    dateInputRefMask.current = formatted;
    const indexatual = Datacuidador.findIndex((item) => item[0] === "datanasc");
    if (Date != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.data) {
        //tem dados
        Datacuidador[indexatual] = ["datanasc", Date];
      } else {
        // não tem dados
        Datacuidador.push(["datanasc", Date]);
      }
    }
  }

  const pickImage = async () => {
    let Image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(Image);
    if (!Image.canceled) {
      const indexatual = Datacuidador.findIndex(
        (item) => item[0] === "profileimg"
      );
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.image) {
        //tem dados
        Datacuidador[indexatual] = ["profileimg", Image.assets[0].uri];
      } else {
        // não tem dados
        Datacuidador.push(["profileimg", Image.assets[0].uri]);
      }
    }
  };

  const gothrirdstep = (): void => {
    const datacuidadorOBJ = Object.fromEntries(Datacuidador);
    const keys = Object.values(datacuidadorOBJ);
    if (Datacuidador.length >= 8) {
      console.log(Datacuidador);
      if (DateRef.current && cpfRef.current) {
        if (DateRef.current.length === 10 && cpfRef.current.length === 11) {
          navigation.navigate("Cadastrocuidador3", { datacuidadorOBJ });
        } else
          console.log("Erro: campo cpf ou data com caracters insuficientes");
      } else console.log("Erro :preencha todos os dados obrigatórios");
    } else {
      console.log("Erro :preencha todos os dados obrigatórios");
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <Inputs
          nometxt="cpf *"
          placeholder="digite seu cpf"
          value={""}
          multiline={false}
          onchangevalue={handlecpf}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="numeric"
          length={11}
        />
        <TouchableOpacity onPress={pickImage}>
          <Text>Foto de perfil</Text>
          <View style={cadastro.inputimg}></View>
        </TouchableOpacity>

        <Text style={[styles.txt, { marginTop: 30 }]}>data de nascimento</Text>
        <TextInputMask
          placeholder="dia/mês/ano"
          style={[
            styles.input,
            {
              height: 40,
              borderBottomWidth: 2,
              borderColor: "#dddddd",
              marginTop: 10,
            },
          ]}
          maxLength={10}
          ref={dateInputRefMask}
          type={"datetime"}
          options={{
            format: "DD/MM/YYYY",
          }}
          onChangeText={handledatenasc}
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="próximo"
          txtcor="#C77B43"
          pres={gothrirdstep}
          fontsize={16}
          altura={40}
          largura={100}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador2;
