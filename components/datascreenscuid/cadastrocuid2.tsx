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
import { useState, useEffect, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { TextInputMask } from "react-native-masked-text";
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
  interface CuidadorDatainterface {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    profissao: string;
    descricao: string;
  }
  const [DataCuidador, setDataCuidador] = useState<CuidadorDatainterface>({
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
        setDataCuidador(DatacuidadorObj);
      }
    }
  }, []);
  if (DataCuidador) {
    var Datacuidador: (string | number)[][] = Object.entries(DataCuidador);
  }

  function handlecpf(Cpf: string) {
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
  const dateInputRef = useRef(null);
  function handledatenasc(
    Date: string,
    formatted: any,
    extracted?: string | undefined
  ) {
    dateInputRef.current = formatted;
    const indexatual = Datacuidador.findIndex((item) => item[0] === "data");
    if (Date != "") {
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.data) {
        //tem dados
        Datacuidador[indexatual] = ["data", Date];
      } else {
        // não tem dados
        Datacuidador.push(["data", Date]);
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
      const indexatual = Datacuidador.findIndex((item) => item[0] === "image");
      const dataOBJ = Object.fromEntries(Datacuidador);
      if (dataOBJ.image) {
        //tem dados
        Datacuidador[indexatual] = ["image", Image.assets[0].uri];
      } else {
        // não tem dados
        Datacuidador.push(["image", Image.assets[0].uri]);
      }
    }
  };

  const gonextpage = (): undefined => {
    console.log(Datacuidador);
    // navigation.navigate("Cadastrocuidador3", { DataCuidador });

    // const values = Object.values(DataCuidador);
    // if (DataCuidador.cpf != "" && DataCuidador.datanasc != "") {
    //   //navegação aqui
    // } else {
    //   alert("preenchar os campos orbigatórios");
    // }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <Inputs
          nometxt="cpf *"
          placeholder=""
          value={""}
          onchangevalue={handlecpf}
          issenha={false}
          tamanho={{ height: 30 }}
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
          style={[
            styles.input,
            {
              height: 34,
              borderBottomWidth: 2,
              borderColor: "#dddddd",
              marginTop: 10,
            },
          ]}
          maxLength={10}
          ref={dateInputRef}
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
