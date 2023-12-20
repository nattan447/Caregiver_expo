import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Authenticheadrs } from "../../../desginscomponents/authenticheadrs";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Inputs from "../../../desginscomponents/inputs";
import React from "react";
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Autenticacaocli"
>;
type PropsEntrarCliente = {
  navigation: AuthenticScreenNavigationProp;
};

const Entrarcliente: React.FC<PropsEntrarCliente> = ({ navigation }) => {
  const voltarcliente = (): void => {
    navigation.navigate("Autenticacaocli");
  };

  const [email, Setemail] = useState<string>("");
  const [senha, Setsenha] = useState<string>("");

  const handleEmail = (Email: string): void => {
    Setemail(Email);
  };

  const handleSenha = (Senha: string): void => {
    Setsenha(Senha);
  };
  const entrar = (): void => {
    const cuidadordata: Cuidadadordatainterfc = {
      nome: "Administrador",
      sobrenome: "",
      email: email,
      senha: senha,
      estado: "",
      cidade: "",
      cep: "",
      profissao: "",
      profileimg: "",
      cpf: "",
      descricao: "",
      rua: "",
      datanasc: "",
    };
    if (email === "admin" && senha === "123") {
      navigation.navigate("Homenavigator", cuidadordata);
    } else alert("login ou sennhas incorretos");
  };
  return (
    <SafeAreaView style={homeloginscss.container}>
      <StatusBar hidden={true}></StatusBar>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        style={{ width: "100%" }}
      >
        <Authenticheadrs
          arrowimg={require("../../../assets/arrowheadleft.png")}
          imgheader={require("../../../assets/loginimage1.png")}
          headertxt="Entrar como Cliente"
          trocarmodo={voltarcliente}
          ladoseta="flex-start"
        />

        {/* essa parte vai ser um componente */}

        <View style={[homeloginscss.blocoprincipal]}>
          <Inputs
            multiline={false}
            value=""
            nometxt="email *"
            placeholder=""
            issenha={false}
            onchangevalue={handleEmail}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
          />
          <Inputs
            multiline={false}
            value=""
            nometxt="senha *"
            placeholder=""
            onchangevalue={handleSenha}
            issenha={true}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={40}
          />
          <View style={{ bottom: "10%" }}>
            <Btn
              cor="#C77B43"
              txtbtn="ENTRAR"
              txtcor="#FFFCFC"
              pres={entrar}
              fontsize={16}
              altura={48}
              largura={131}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Entrarcliente;
