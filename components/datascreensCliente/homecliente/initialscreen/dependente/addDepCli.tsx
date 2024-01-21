import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import Inputs, { Combobox } from "../../../../../desginscomponents/inputs";

import { DepDataInterface } from "../../../../interfacests/depDataInterface";

import { Btn } from "../../../../../desginscomponents/authenticheadrs";

import React, { useState, useContext, useEffect } from "react";

import { DepDataContextCli } from "../../datacontext/depDataContext";

import cadastro from "../../../../../estilos/cadastro";

import * as ImagePicker from "expo-image-picker";

import { inputLengthCheck } from "../../../../fuctions/inputCheck";

const AddDependentCli = () => {
  const { depDataContext, setDepDataContext }: any =
    useContext(DepDataContextCli);

  const [depData, setDepData] = useState<DepDataInterface>();

  const [quadro, setQuadro] = useState("");

  const handleName = (Name: string) =>
    setDepData({ ...(depData as DepDataInterface), nome: Name });

  const handleIdade = (Age: string) =>
    setDepData({ ...(depData as DepDataInterface), idade: Age });

  const handleQuadro = (Quadro: string) => {
    setDepData({ ...(depData as DepDataInterface), quadro: Quadro });
    setQuadro(Quadro);
  };

  const handleDescricao = (Desc: string) =>
    setDepData({ ...(depData as DepDataInterface), descricao: Desc });

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
        ...(depData as DepDataInterface),
        profileImg: Image.assets[0].uri,
      });
    }
  };

  const adicionar = () => {
    if (
      inputLengthCheck(depData?.nome) > 1 &&
      inputLengthCheck(depData?.idade) > 1 &&
      inputLengthCheck(depData?.descricao) > 1 &&
      depData?.quadro
    ) {
      setDepDataContext(depData);
      alert("dependente adicionado");
      console.log("todos dados estão obrigatórios estão preenchidos");
    } else {
      alert(" preencha todos dados obrigatórios");
      console.error("falta preencher todos dados obrigatórios");
    }
  };

  useEffect(() => {
    console.log(depDataContext);
  }, [depDataContext]);

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
            <View style={depStyle.imagePickerView}>
              {depData?.profileImg ? (
                <Image
                  source={{ uri: depData.profileImg }}
                  style={depStyle.profileImg}
                ></Image>
              ) : undefined}
            </View>
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
    height: 190,
    justifyContent: "center",
    alignContent: "center",
  },
  defaultTxt: {
    marginBottom: 8,
    color: "#D8A683",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileImg: {
    height: 150,
    width: 180,
    borderRadius: 10,
    alignSelf: "center",
  },
});
