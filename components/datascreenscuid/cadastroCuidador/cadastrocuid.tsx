import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";

import { useState, useEffect } from "react";

import { Authenticheadrs } from "../../../desginscomponents/authenticheadrs";

import { AuthenticRootParamList } from "../../../types/authenticRoot";

import { Btn } from "../../../desginscomponents/authenticheadrs";

import homeloginscss from "../../../estilos/homeloginscss";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import React from "react";

import { Combobox } from "../../../desginscomponents/inputs";

import cadastro from "../../../estilos/cadastro";

import Inputs from "../../../desginscomponents/inputs";

import { validatePathConfig } from "@react-navigation/native";

import { inputLengthCheck } from "../../fuctions/inputCheck";

import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";

type PropsCadastroCuid1 = NativeStackScreenProps<
  AuthenticRootParamList,
  "Cadastrocuidador"
>;
type PickedCuidadadorData = Pick<
  Cuidadadordatainterfc,
  "nome" | "sobrenome" | "email" | "senha" | "descricao" | "profissao"
>;
const Cadastrocuidador = ({ navigation }: PropsCadastroCuid1) => {
  const [profissao, Setprofissao] = useState("");

  const [datacuidador, setDataCuidador] = useState<PickedCuidadadorData>();

  const Voltar = () => navigation.navigate("Autenticacaocuid");

  const handleNome = (Name: string) =>
    setDataCuidador({ ...(datacuidador as PickedCuidadadorData), nome: Name });

  const handleSobrenome = (sbrNome: string) =>
    setDataCuidador({
      ...(datacuidador as PickedCuidadadorData),
      sobrenome: sbrNome,
    });

  const handleEmail = (Email: string) =>
    setDataCuidador({
      ...(datacuidador as PickedCuidadadorData),
      email: Email,
    });

  const handleSenha = (Senha: string) =>
    setDataCuidador({
      ...(datacuidador as PickedCuidadadorData),
      senha: Senha,
    });

  const handleDescricao = (Desc: string) =>
    setDataCuidador({
      ...(datacuidador as PickedCuidadadorData),
      descricao: Desc,
    });

  function handleProfissao(Profissao: string) {
    Setprofissao(Profissao);

    setDataCuidador({
      ...(datacuidador as PickedCuidadadorData),
      profissao: Profissao,
    });
  }

  const goSecondstep = () => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      inputLengthCheck(datacuidador?.nome) >= 1 &&
      inputLengthCheck(datacuidador?.sobrenome) >= 1 &&
      inputLengthCheck(datacuidador?.email) >= 1 &&
      inputLengthCheck(datacuidador?.senha) >= 1 &&
      datacuidador?.profissao
    ) {
      if (regexEmail.test(datacuidador?.email as string)) {
        if (inputLengthCheck(datacuidador?.senha as string) < 5) {
          alert("digite uma senha com mais de 4 carácteres");
        } else {
          navigation.navigate("Cadastrocuidador2", datacuidador);
          console.log("a senha tem mais de 4 carácteres ");
        }
      } else alert("digite o email de forma correta");
    } else {
      alert("preecha todos dados obrigatórios");
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <ScrollView
        style={{ width: "100%" }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <Text style={cadastro.criarcontatxt}>Criar conta</Text>
        <Inputs
          value={datacuidador?.nome}
          nometxt="nome *"
          placeholder="digite seu nome"
          onchangevalue={handleNome}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="default"
          length={40}
          multiline={false}
        />
        <Inputs
          nometxt="sobrenome *"
          value={datacuidador?.sobrenome}
          placeholder="digite seu sobrenome"
          onchangevalue={handleSobrenome}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="default"
          length={40}
          multiline={false}
        />

        <Inputs
          value={datacuidador?.email}
          nometxt="email * "
          placeholder={"digite seu email"}
          onchangevalue={handleEmail}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn={"nada"}
          type="default"
          length={30}
          multiline={false}
        />
        <Inputs
          value={datacuidador?.senha}
          nometxt="senha *"
          placeholder="digite sua senha"
          onchangevalue={handleSenha}
          issenha={true}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="default"
          length={10}
          multiline={false}
        />

        <Inputs
          value={datacuidador?.descricao}
          nometxt="descrição"
          placeholder="breve descricão"
          onchangevalue={handleDescricao}
          issenha={false}
          tamanho={{ height: 140 }}
          emailwarn=""
          type="default"
          length={300}
          multiline={true}
        />
        <Combobox
          placeholder="selecione a profissão"
          textabove="profissão *"
          initialvalue={profissao}
          onchange={handleProfissao}
          arrayvalues={[
            "Cuidador Pcd’s",
            "Cuidador idosos",
            "Cuidador pets",
            "Cuidador infantil",
          ]}
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="próximo"
          txtcor="#C77B43"
          pres={goSecondstep}
          fontsize={16}
          altura={40}
          largura={200}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastrocuidador;
