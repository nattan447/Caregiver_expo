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
import { styles } from "../../../desginscomponents/inputs";
import { useState, useEffect, useRef } from "react";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../../estilos/cadastro";
import Inputs from "../../../desginscomponents/inputs";
import { RouteProp, StackRouterOptions } from "@react-navigation/native";
import { Clientedatainterfc } from "../../interfacests/clienteInterface";
import * as ImagePicker from "expo-image-picker";
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "cadastrocliente"
>;
type PropsNavCadastroCliente = {
  navigation: AuthenticScreenNavigationProp;
  route: RouteProp<AuthenticRootParamList, "cadastrocliente">;
};
const Cadastrocliente: React.FC<PropsNavCadastroCliente> = ({
  navigation,
}: PropsNavCadastroCliente) => {
  const [clienteData, setClienteData] = useState<Clientedatainterfc>();

  const handleName = (Name: string) => {
    setClienteData({
      nome: Name,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
    });
  };

  const handleSobrenome = (Sobrenome: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: Sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
    });
  };

  const handleEmail = (Email: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: Email,
      senha: clienteData?.senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
    });
  };
  const handleSenha = (Senha: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: Senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
    });
  };

  const handleCpf = (Cpf: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
      cpf: Cpf,
      profileimg: clienteData?.profileimg,
    });
  };

  const pickImage = async () => {
    let Image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(Image);
    if (!Image.canceled) {
      setClienteData({
        nome: clienteData?.nome,
        sobrenome: clienteData?.sobrenome,
        email: clienteData?.email,
        senha: clienteData?.senha,
        cpf: clienteData?.cpf,
        profileimg: Image.assets[0].uri,
      });
    }
  };

  const gosecondStep = (): void => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const valuesCliente = clienteData ? Object.values(clienteData) : undefined;
    const regexEmptyInput = /^\S+$/;
    const Filled = valuesCliente?.filter((value) =>
      regexEmptyInput.test(value)
    );
    if (Filled?.length === 6) {
      if (regexEmail.test(clienteData?.email as string)) {
        if (clienteData?.cpf?.length === 11) {
          console.log("pode passar");
          navigation.navigate("roothomecliente", clienteData);
        } else alert("campo de cpf com caracteres insuficientes ");
      } else alert("digite o email de forma correta");
    } else {
      alert("preecha todos dados");
    }
    console.log(clienteData);
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <ScrollView automaticallyAdjustKeyboardInsets style={{ width: "100%" }}>
          <Text style={cadastro.criarcontatxt}>Criar conta</Text>
          <Inputs
            value={clienteData?.nome}
            nometxt="nome *"
            placeholder="digite seu nome"
            onchangevalue={handleName}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
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
          <Inputs
            value={clienteData?.cpf}
            nometxt="cpf *"
            placeholder="digite seu  cpf"
            onchangevalue={handleCpf}
            issenha={true}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={11}
            multiline={false}
          />
          <TouchableOpacity onPress={pickImage} style={{ alignSelf: "center" }}>
            <Text style={styles.txt}>Foto de perfil</Text>
            <View style={cadastro.inputimg}></View>
          </TouchableOpacity>

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

export default Cadastrocliente;
