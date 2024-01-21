import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { styles } from "../../../desginscomponents/inputs";

import { useState, useEffect, useRef } from "react";

import * as ImagePicker from "expo-image-picker";

import { TextInputMask } from "react-native-masked-text";

import { AuthenticRootParamList } from "../../../types/authenticRoot";

import { Btn } from "../../../desginscomponents/authenticheadrs";

import homeloginscss from "../../../estilos/homeloginscss";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import React from "react";

import cadastro from "../../../estilos/cadastro";

import Inputs from "../../../desginscomponents/inputs";

import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";

type PropsCadastroCuid2 = NativeStackScreenProps<
  AuthenticRootParamList,
  "Cadastrocuidador2"
>;

type OmitedCuidadadorData = Omit<
  Cuidadadordatainterfc,
  "cidade" | "rua" | "cep" | "pricePerHour" | "estado"
>;

const Cadastrocuidador2 = ({ navigation, route }: PropsCadastroCuid2) => {
  const [datacuidador, setDatacuidador] = useState<OmitedCuidadadorData>();

  let cpfRef = useRef<string | undefined>(undefined);

  const DateRef = useRef("");

  const dateInputRefMask = useRef(null);

  useEffect(() => {
    const fetchParams = async () => {
      try {
        if (route.params) {
          const DatacuidadorObj = await route.params;
          if (DatacuidadorObj != undefined) {
            setDatacuidador(DatacuidadorObj as OmitedCuidadadorData);
          }
        }
      } catch (error) {
        console.log("deu erro", error);
      }
    };
    fetchParams();
  }, []);

  const handleCpf = (Cpf: string) => {
    cpfRef.current = Cpf;
    setDatacuidador({
      ...(datacuidador as OmitedCuidadadorData),
      cpf: Cpf,
    });
  };

  function handleDateNasc(
    Date: string,
    formatted: any,
    extracted?: string | undefined
  ) {
    DateRef.current = Date;
    dateInputRefMask.current = formatted;
    setDatacuidador({
      ...(datacuidador as OmitedCuidadadorData),
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
        ...(datacuidador as OmitedCuidadadorData),
        profileimg: Image.assets[0].uri,
      });
      alert("imagem adicionada");
    }
  };

  async function handleCertificado() {
    let Image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(Image);

    if (!Image.canceled) {
      setDatacuidador({
        ...(datacuidador as OmitedCuidadadorData),
        certificado: Image.assets[0].uri,
      });
    }
  }

  const gothrirdstep = () => {
    const regexEmptyInput = /^\S+$/;

    const arrayData = datacuidador ? Object.values(datacuidador) : "";

    if (arrayData?.length >= 7) {
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
            onchangevalue={handleCpf}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={11}
          />
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.txt}>Foto de perfil</Text>
            <View style={cadastro.inputimg}>
              <Image
                style={styleCadastro.imgCertificado}
                source={require("../../../assets/user2.png")}
              ></Image>
            </View>
          </TouchableOpacity>
          <View style={styleCadastro.viewTxt}>
            <Text style={[styles.txt, styleCadastro.txtDate]}>
              data de nascimento *
            </Text>
          </View>
          <TextInputMask
            placeholder="dia/mês/ano"
            style={[styles.input, styleCadastro.dateInput]}
            maxLength={10}
            value={datacuidador?.datanasc}
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            onChangeText={handleDateNasc}
          />
          <TouchableOpacity
            onPress={handleCertificado}
            style={styleCadastro.viewCertificado}
          >
            <Text style={styles.txt}>Certificado</Text>
            <View style={cadastro.inputimg}>
              <Image
                style={styleCadastro.imgCertificado}
                source={require("../../../assets/certificado.png")}
              ></Image>
            </View>
          </TouchableOpacity>
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

const styleCadastro = StyleSheet.create({
  dateInput: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#dddddd",
    marginTop: 10,
  },
  txtDate: {
    top: 10,
    marginTop: 40,
  },
  viewTxt: {
    width: "70%",
  },
  viewCertificado: {
    marginTop: "10%",
  },
  imgCertificado: {
    height: 90,
    width: 90,
  },
});
