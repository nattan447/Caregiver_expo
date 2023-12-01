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
  "Cadastrocuidador2"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
  route: RouteProp<RootStackParamList, "Cadastrocuidador2">;
};

const Cadastrocuidador2: React.FC<Props> = ({ navigation, route }: Props) => {
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
  const [DataCuidador, setDataCuidador] = useState<Cuidadordatainterface>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    profissao: "",
    descricao: "",
    profileimg: "",
    cpf: "",
    datanasc: " string",
  });
  useEffect(() => {
    if (route.params) {
      const { cuidadordata }: any = route.params;
      setDataCuidador(cuidadordata);
    }
  }, []);

  function handlecpf(Cpf: string) {
    setDataCuidador({
      nome: DataCuidador.nome,
      sobrenome: DataCuidador.sobrenome,
      email: DataCuidador.email,
      senha: DataCuidador.senha,
      profissao: DataCuidador.profissao,
      descricao: DataCuidador.descricao,
      profileimg: DataCuidador.profileimg,
      cpf: Cpf,
      datanasc: DataCuidador.datanasc,
    });
  }
  function handledatanasc(Data: string) {
    setDataCuidador({
      nome: DataCuidador.nome,
      sobrenome: DataCuidador.sobrenome,
      email: DataCuidador.email,
      senha: DataCuidador.senha,
      profissao: DataCuidador.profissao,
      descricao: DataCuidador.descricao,
      profileimg: DataCuidador.profileimg,
      cpf: DataCuidador.cpf,
      datanasc: Data,
    });
  }

  const [image, setImage] = useState<string>("");
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const gonextpage = (): undefined => {
    const values = Object.values(DataCuidador);
    values.map((elemeto) => console.log(elemeto));
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <Inputs
          nometxt="cpf *"
          placeholder=""
          value={DataCuidador.cpf}
          onchangevalue={handlecpf}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
        />
        <TouchableOpacity onPress={pickImage}>
          <Text>Foto de perfil</Text>
          <View style={cadastro.inputimg}></View>
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Inputs
          nometxt="data de nascimento *"
          placeholder="Ex: dd/mm/yy"
          value={DataCuidador.datanasc}
          onchangevalue={handledatanasc}
          issenha={false}
          tamanho={{ height: 30 }}
          emailwarn=""
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="próximo"
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

export default Cadastrocuidador2;
