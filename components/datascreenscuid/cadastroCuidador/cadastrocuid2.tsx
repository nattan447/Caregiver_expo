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
import { styles } from "../../../desginscomponents/inputs";
import { useState, useEffect, useRef, useMemo } from "react";
import * as ImagePicker from "expo-image-picker";
import { TextInputMask } from "react-native-masked-text";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../../estilos/cadastro";
import Inputs from "../../../desginscomponents/inputs";
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
  interface CadastrocuidadorInter2 {
    nome: string | undefined;
    sobrenome: string | undefined;
    email: string | undefined;
    senha: string | undefined;
    profissao: string | undefined;
    descricao: string | undefined;
    cpf: string | undefined;
    profileimg: string | undefined;
    datanasc: string | undefined;
  }
  const [datacuidador, setDatacuidador] = useState<CadastrocuidadorInter2>();

  useEffect(() => {
    const fetchParams = async () => {
      try {
        if (route.params) {
          const DatacuidadorObj = route.params;
          if (DatacuidadorObj != undefined) {
            setDatacuidador(DatacuidadorObj as CadastrocuidadorInter2);
          }
        }
      } catch (error) {
        console.log("deu erro", error);
      }
    };
    fetchParams();
  }, []);

  let cpfRef = useRef<string | undefined>(undefined);
  function handlecpf(Cpf: string) {
    cpfRef.current = Cpf;
    setDatacuidador({
      nome: datacuidador?.nome,
      sobrenome: datacuidador?.sobrenome,
      email: datacuidador?.email,
      senha: datacuidador?.senha,
      descricao: datacuidador?.descricao,
      profissao: datacuidador?.profissao,
      cpf: Cpf,
      profileimg: datacuidador?.profileimg,
      datanasc: datacuidador?.datanasc,
    });
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
    setDatacuidador({
      nome: datacuidador?.nome,
      sobrenome: datacuidador?.sobrenome,
      email: datacuidador?.email,
      senha: datacuidador?.senha,
      descricao: datacuidador?.descricao,
      profissao: datacuidador?.profissao,
      cpf: datacuidador?.cpf,
      profileimg: datacuidador?.profileimg,
      datanasc: Date,
    });
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
      setDatacuidador({
        nome: datacuidador?.nome,
        sobrenome: datacuidador?.sobrenome,
        email: datacuidador?.email,
        senha: datacuidador?.senha,
        descricao: datacuidador?.descricao,
        profissao: datacuidador?.profissao,
        cpf: datacuidador?.cpf,
        profileimg: Image.assets[0].uri,
        datanasc: datacuidador?.datanasc,
      });
    }
  };

  const gothrirdstep = (): void => {
    const regexEmptyInput = /^\S+$/;
    const arrayData = datacuidador ? Object.values(datacuidador) : "";
    if (arrayData?.length >= 8) {
      console.log(datacuidador);
      if (DateRef.current && cpfRef.current) {
        if (
          DateRef.current.length === 10 &&
          cpfRef.current.length === 11 &&
          regexEmptyInput.test(cpfRef.current)
        ) {
          navigation.navigate("Cadastrocuidador3", { datacuidador });
          console.log("pode passar");
          console.log(datacuidador);
        } else alert("Erro: campo cpf ou data com caracters insuficientes");
      } else alert("Erro :preencha todos os dados obrigatórios");
    } else {
      alert("Erro :preencha todos os dados obrigatórios");
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <ScrollView
        style={{ width: "100%" }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={cadastro.cadastroview2}>
          <Inputs
            nometxt="cpf *"
            placeholder="digite seu cpf"
            value={datacuidador?.cpf}
            multiline={false}
            onchangevalue={handlecpf}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={11}
          />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.txt}>Foto de perfil</Text>
            <View style={cadastro.inputimg}></View>
          </TouchableOpacity>
          <View
            style={{
              width: "70%",
            }}
          >
            <Text style={[styles.txt, { top: 10, marginTop: 40 }]}>
              data de nascimento
            </Text>
          </View>
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
            value={datacuidador?.datanasc}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastrocuidador2;
