import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { Authenticheadrs } from "../../../desginscomponents/authenticheadrs";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Combobox } from "../../../desginscomponents/inputs";
import cadastro from "../../../estilos/cadastro";
import Inputs from "../../../desginscomponents/inputs";
import { validatePathConfig } from "@react-navigation/native";
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Cadastrocuidador"
>;
type PropsNavCuidador = {
  navigation: AuthenticScreenNavigationProp;
};

interface CadastrocuidadorInter1 {
  nome: string | undefined;
  sobrenome: string | undefined;
  email: string | undefined;
  senha: string | undefined;
  descricao: string | undefined;
  profissao: string | undefined;
}
const Cadastrocuidador: React.FC<PropsNavCuidador> = ({ navigation }) => {
  const [datacuidador, setDataCuidador] = useState<CadastrocuidadorInter1>();
  const Voltar = (): void => {
    console.log("volto pra tela inicial");
    navigation.navigate("Autenticacaocuid");
  };
  function handlenome(Nome: string): void {
    setDataCuidador({
      nome: Nome,
      sobrenome: datacuidador?.sobrenome,
      email: datacuidador?.email,
      senha: datacuidador?.senha,
      descricao: datacuidador?.descricao,
      profissao: datacuidador?.profissao,
    });
  }
  function handlesobrenome(Sobrenome: string): void {
    setDataCuidador({
      nome: datacuidador?.nome,
      sobrenome: Sobrenome,
      email: datacuidador?.email,
      senha: datacuidador?.senha,
      descricao: datacuidador?.descricao,
      profissao: datacuidador?.profissao,
    });
  }
  function handleemail(Email: string): void {
    setDataCuidador({
      nome: datacuidador?.nome,
      sobrenome: datacuidador?.sobrenome,
      email: Email,
      senha: datacuidador?.senha,
      descricao: datacuidador?.descricao,
      profissao: datacuidador?.profissao,
    });
  }
  function handlesenha(Senha: string): void {
    setDataCuidador({
      nome: datacuidador?.nome,
      sobrenome: datacuidador?.sobrenome,
      email: datacuidador?.email,
      senha: Senha,
      descricao: datacuidador?.descricao,
      profissao: datacuidador?.profissao,
    });
  }

  function handledescricao(Descricao: string): void {
    setDataCuidador({
      nome: datacuidador?.nome,
      sobrenome: datacuidador?.sobrenome,
      email: datacuidador?.email,
      senha: datacuidador?.senha,
      descricao: Descricao,
      profissao: datacuidador?.profissao,
    });
  }
  //combobox
  const [profissao, Setprofissao] = useState<string>("");
  function handleprofissao(Profissao: string) {
    Setprofissao(Profissao);
    setDataCuidador({
      nome: datacuidador?.nome,
      sobrenome: datacuidador?.sobrenome,
      email: datacuidador?.email,
      senha: datacuidador?.senha,
      descricao: datacuidador?.descricao,
      profissao: Profissao,
    });
  }

  //é a mesma função para todas telas de cadastro
  function inputLength(input: string | undefined): number {
    const regexEmptyInput = /^\S+$/;
    if (input != undefined) {
      const nameNoSpaces = input
        .split("")
        .filter((char) => regexEmptyInput.test(char));
      return nameNoSpaces.length;
    } else {
      return 0;
    }
  }

  const goSecondstep = (): void => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      inputLength(datacuidador?.nome) >= 1 &&
      inputLength(datacuidador?.sobrenome) >= 1 &&
      inputLength(datacuidador?.email) >= 1 &&
      inputLength(datacuidador?.senha) >= 1 &&
      datacuidador?.profissao
    ) {
      if (regexEmail.test(datacuidador?.email as string)) {
        if (inputLength(datacuidador?.senha as string) < 5) {
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
          onchangevalue={handlenome}
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
          onchangevalue={handlesobrenome}
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
          onchangevalue={handleemail}
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
          onchangevalue={handlesenha}
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
          onchangevalue={handledescricao}
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
          onchange={handleprofissao}
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
