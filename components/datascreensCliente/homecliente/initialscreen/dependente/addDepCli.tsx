import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Inputs, { Combobox } from "../../../../../desginscomponents/inputs";
import { DepDataInterface } from "../../../../interfacests/depDataInterface";
import { Btn } from "../../../../../desginscomponents/authenticheadrs";
import React, { useState, useContext } from "react";
import { DepDataContextCli } from "../../datacontext/depDataContext";
import cadastro from "../../../../../estilos/cadastro";
import * as ImagePicker from "expo-image-picker";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
const AddDependentCli = () => {
  const { depDataContext, setDepDataContext }: any =
    useContext(DepDataContextCli);
  const [depData, setDepData] = useState<DepDataInterface>(depDataContext);
  const [quadro, setQuadro] = useState<string>("");
  function handleName(Name: string) {
    setDepData({
      nome: Name,
      idade: depData?.idade,
      quadro: depData?.quadro,
      profileImg: depData?.profileImg,
      descricao: depData?.descricao,
    });
  }
  function handleIdade(Idade: string) {
    setDepData({
      nome: depData?.nome,
      idade: Idade,
      quadro: depData?.quadro,
      profileImg: depData?.profileImg,
      descricao: depData?.descricao,
    });
  }

  function handleQuadro(Quadro: string) {
    setQuadro(Quadro);
    setDepData({
      nome: depData?.nome,
      idade: depData?.idade,
      quadro: Quadro,
      profileImg: depData?.profileImg,
      descricao: depData?.descricao,
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
      setDepData({
        nome: depData?.nome,
        idade: depData?.idade,
        quadro: depData?.quadro,
        profileImg: Image.assets[0].uri,
        descricao: depData?.descricao,
      });
    }
  };
  function handleDescricao(Descricao: string) {
    setDepData({
      nome: depData?.nome,
      idade: depData?.idade,
      quadro: depData?.quadro,
      profileImg: depData?.profileImg,
      descricao: Descricao,
    });
  }
  function adicionar() {
    setDepDataContext(depData);
    alert("adicionado com sucesso");
    console.log(depDataContext);
  }

  return (
    <SafeAreaView style={depStyle.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={depStyle.cadastroView}>
          <Inputs
            multiline={false}
            value={depData?.nome}
            onchangevalue={handleName}
            nometxt="nome *"
            placeholder="digite o nome"
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
          />
          <Inputs
            multiline={false}
            value={depData?.idade}
            onchangevalue={handleIdade}
            nometxt="idade *"
            placeholder="digite a idade"
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={40}
          />

          <TouchableOpacity
            onPress={pickImage}
            style={depStyle.imagePickerStyle}
          >
            <Text style={depStyle.defaultTxt}>Foto de perfil</Text>
            <View style={depStyle.imagePickerView}></View>
          </TouchableOpacity>
          <Inputs
            multiline={true}
            value={depData?.descricao}
            onchangevalue={handleDescricao}
            nometxt="descrição *"
            placeholder=""
            issenha={false}
            tamanho={{ height: 140 }}
            emailwarn=""
            type="default"
            length={240}
          />
          <Combobox
            placeholder="selecione o quadro"
            textabove="quadro *"
            initialvalue={quadro}
            onchange={handleQuadro}
            arrayvalues={["Pcd", "Idosos", "Pet", "Infantil"]}
          />
          <Btn
            cor="#F1EBEB"
            txtcor="#E64A19"
            txtbtn="adicionar"
            pres={adicionar}
            fontsize={16}
            altura={48}
            largura={131}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export { AddDependentCli };

const depStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#607D8B",
  },
  cadastroView: {
    height: "100%",
    backgroundColor: "#F8F8F8",
    width: "100%",
    marginTop: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  imagePickerStyle: {
    alignSelf: "center",
    marginBottom: 80,
  },
  imagePickerView: {
    backgroundColor: "#F1EBEB",
    borderRadius: 5,
    width: 240,
    color: "#D8A683",
    paddingLeft: 8,
    zIndex: 1,
    position: "relative",
    height: 190,
  },
  defaultTxt: {
    marginBottom: 8,
    color: "#D8A683",
    fontSize: 16,
    fontWeight: "bold",
  },
});
