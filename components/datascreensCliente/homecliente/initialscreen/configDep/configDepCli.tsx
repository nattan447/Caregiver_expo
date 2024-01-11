import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { InputConfig } from "../../../../homecomponents/initialScreenComp/configComponents/inputConfig";
import Inputs from "../../../../../desginscomponents/inputs";
import { Combobox } from "../../../../../desginscomponents/inputs";
import { useState } from "react";
import { BigInput } from "../../../../../desginscomponents/bigInput";
import { HeaderConfig } from "../../../../homecomponents/initialScreenComp/configComponents/header";
import { Btn } from "../../../../../desginscomponents/authenticheadrs";
const ConfigDepCli = () => {
  const [quadro, setQuadro] = useState<string>("");

  function handleQuadro(Quadro: string) {
    setQuadro(Quadro);
  }
  function handleName(Name: string) {}
  function handleIdade(Idade: string) {}
  function handleDescricao(Descricao: string) {}

  //planejo colocar algum algoritimo usando a consulta do banco de dados para que eu possa poder trocar de dependentes no processo

  return (
    <View style={configDepStyle.container}>
      <ScrollView style={{ width: "100%" }}>
        <Image
          source={require("../../../../../assets/modelFace.jpg")}
          style={configDepStyle.depImg}
        ></Image>
        <InputConfig
          txt="nome completo"
          isPassWord={false}
          onchangeValue={handleName}
          value=""
          placeholder="digite  o nome"
          maxLength={40}
          type="default"
        />
        <InputConfig
          txt="idade"
          isPassWord={false}
          onchangeValue={handleIdade}
          value=""
          placeholder="digite  a idade"
          maxLength={40}
          type="default"
        />
        <BigInput
          value={""}
          onchangeValue={handleDescricao}
          nometxt="descrição *"
          placeholder=""
        />
        <Combobox
          placeholder="selecione o quadro"
          textabove="Quadro"
          initialvalue={quadro}
          onchange={handleQuadro}
          arrayvalues={["Pcd", "Idosos", "Pet", "Infantil"]}
        />
        <Btn
          cor="#F1EBEB"
          txtcor="#E64A19"
          txtbtn="SALVAR"
          pres={() => alert("dados salvos na nuvem")}
          fontsize={16}
          altura={48}
          largura={131}
        />
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
});
