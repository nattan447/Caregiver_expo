import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { InputConfig } from "../../../../homecomponents/initialScreenComp/configComponents/inputConfig";

import Inputs from "../../../../../desginscomponents/inputs";

import { DepDataContextCli } from "../../datacontext/depDataContext";

import { Combobox } from "../../../../../desginscomponents/inputs";

import { useState, useContext } from "react";

import { BigInput } from "../../../../../desginscomponents/bigInput";

import { HeaderConfig } from "../../../../homecomponents/initialScreenComp/configComponents/header";

import { Btn } from "../../../../../desginscomponents/authenticheadrs";

import { DepDataInterface } from "../../../../interfacests/depDataInterface";

import { inputLengthCheck } from "../../../../fuctions/inputCheck";

import * as ImagePicker from "expo-image-picker";

import { SafeAreaView } from "react-native-safe-area-context";

const ConfigDepCli = () => {
  const { depDataContext, setDepDataContext }: any =
    useContext(DepDataContextCli);

  const [newData, setNewData] = useState<DepDataInterface>(depDataContext);

  const [quadro, setQuadro] = useState<string>("");

  useEffect(() => {
    console.log(depDataContext);
  }, []);

  async function handleImage() {
    let Image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(Image);
    if (!Image.canceled) {
      setNewData({ ...newData, profileImg: Image.assets[0].uri });
    }
  }

  const handleName = (Name: string) => setNewData({ ...newData, nome: Name });

  const handleIdade = (Age: string) => setNewData({ ...newData, idade: Age });

  const handleDescricao = (Des: string) =>
    setNewData({ ...newData, descricao: Des });

  const handleQuadro = (Quadro: string) => {
    setNewData({ ...newData, quadro: Quadro });
    setQuadro(Quadro);
  };

  function salvar() {
    if (
      inputLengthCheck(newData.nome) > 1 &&
      inputLengthCheck(newData.idade) > 1 &&
      inputLengthCheck(newData.descricao) > 1 &&
      newData.quadro
    ) {
      alert("dados salvos");
      console.log("campos obrigatórios completos");
      console.log(newData);
      setDepDataContext(newData);
    } else {
      alert("preencha todos campos obrigatórios");
      console.error("falta preencher campos obrigatórios");
    }
  }
  //planejo colocar algum algoritimo usando a consulta do banco de dados para que eu possa poder trocar de dependentes no processo

  return (
    <View style={configDepStyle.container}>
      <ScrollView style={{ width: "100%" }}>
        {depDataContext ? (
          <>
            <TouchableOpacity onPress={handleImage}>
              <Image
                source={
                  newData.profileImg
                    ? { uri: newData.profileImg }
                    : require("../../../../../assets/modelFace.jpg")
                }
                style={configDepStyle.depImg}
              ></Image>
            </TouchableOpacity>
            <InputConfig
              txt="nome completo"
              isPassWord={false}
              onchangeValue={handleName}
              value={newData?.nome}
              placeholder="digite  o nome"
              maxLength={40}
              type="default"
            />
            <InputConfig
              txt="idade"
              isPassWord={false}
              onchangeValue={handleIdade}
              value={newData?.idade}
              placeholder="digite  a idade"
              maxLength={40}
              type="numeric"
            />
            <BigInput
              value={newData?.descricao as string}
              onchangeValue={handleDescricao}
              nometxt="descrição *"
              placeholder=""
            />
            <Combobox
              placeholder="selecione o quadro"
              textabove="Quadro"
              initialvalue={newData?.quadro as string}
              onchange={handleQuadro}
              arrayvalues={["Pcd", "Idosos", "Pet", "Infantil"]}
            />
            <Btn
              cor="#F1EBEB"
              txtcor="#E64A19"
              txtbtn="SALVAR"
              pres={salvar}
              fontsize={16}
              altura={48}
              largura={131}
            />
          </>
        ) : (
          <SafeAreaView style={configDepStyle.errorDiv}>
            <Text style={configDepStyle.errorTxt}>
              Não existem dependentes adicionados
            </Text>
          </SafeAreaView>
        )}
      </ScrollView>
    </View>
  );
};
export { ConfigDepCli };

const configDepStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  depImg: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: "10%",
    borderRadius: 50,
  },
  errorDiv: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  errorTxt: {
    color: "red",
  },
});
