import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../../estilos/cadastro";
import Inputs from "../../../desginscomponents/inputs";
import { RouteProp, StackRouterOptions } from "@react-navigation/native";
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "cadastrocliente2"
>;

interface Clientedatainterfc1 {
  nome: string | undefined;
  sobrenome: string | undefined;
  email: string | undefined;
  senha: string | undefined;
}

type PropsNavCadastroCliente2 = {
  navigation: AuthenticScreenNavigationProp;
  route: RouteProp<AuthenticRootParamList, "cadastrocliente2">;
};
const Cadastrocliente2: React.FC<PropsNavCadastroCliente2> = ({
  navigation,
  route,
}: PropsNavCadastroCliente2) => {
  useEffect(() => {
    alert("essa é a segunda parte");
    if (route.params) {
      console.log(route.params);
    }
  }, []);

  const [clienteData, setClienteData] = useState<Clientedatainterfc1>();

  const handleName = (Name: string) => {
    setClienteData({
      nome: Name,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
    });
  };

  const handleSobrenome = (Sobrenome: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: Sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
    });
  };

  const handleEmail = (Email: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: Email,
      senha: clienteData?.senha,
    });
  };
  const handleSenha = (Senha: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: Senha,
    });
  };
  const gosecondStep = (): void => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexEmptyInput = /^\S+$/;
    const valuesCliente = clienteData ? Object.values(clienteData) : undefined;
    const Filled = valuesCliente?.filter((value) =>
      regexEmptyInput.test(value)
    );
    if (Filled?.length === 4) {
      if (regexEmail.test(clienteData?.email as string)) {
        console.log("pode passar");
      } else alert("digite o email de forma correta");
    } else {
      alert("preecha todos dados");
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <ScrollView automaticallyAdjustKeyboardInsets style={{ width: "100%" }}>
          <Text style={cadastro.criarcontatxt}>segunda parte</Text>
          <Inputs
            value={clienteData?.nome}
            nometxt="cpf *"
            placeholder="digite seu cpf"
            onchangevalue={handleName}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={40}
            multiline={false}
          />
          <Inputs
            nometxt="sobrenome *"
            value={clienteData?.sobrenome}
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
            value={clienteData?.email}
            nometxt="email * "
            placeholder={"digite seu email"}
            onchangevalue={handleEmail}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn={"nada"}
            type="email-address"
            length={30}
            multiline={false}
          />
          <Inputs
            value={clienteData?.senha}
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
          <Btn
            cor="#F1EBEB"
            txtbtn="próximo"
            txtcor="#C77B43"
            pres={gosecondStep}
            fontsize={16}
            altura={40}
            largura={200}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocliente2;
