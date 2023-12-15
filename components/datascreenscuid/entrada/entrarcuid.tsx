import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Authenticheadrs } from "../../../desginscomponents/authenticheadrs";
import { RootStackParamList } from "../../../App";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Inputs from "../../../desginscomponents/inputs";
import React from "react";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Autenticacaocli"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Entrarcuidador: React.FC<Props> = ({ navigation }) => {
  const irpaginacuidador = (): undefined => {
    navigation.navigate("Autenticacaocuid");
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
    console.log(email);
    console.log(senha);
    if (email === "admin" && senha === "123") {
      navigation.navigate("Homenavigator", {
        cuidadordata: { nome: email },
      });
    } else alert("login ou sennhas incorretos");
  };
  return (
    <SafeAreaView style={homeloginscss.container}>
      <StatusBar hidden={true}></StatusBar>
      <Authenticheadrs
        arrowimg={require("../../../assets/arrowhead.png")}
        imgheader={require("../../../assets/loginimage2.png")}
        headertxt="Entrar como cuidador"
        trocarmodo={irpaginacuidador}
        ladoseta="flex-start"
      />

      {/* essa parte vai ser um componente */}

      <View style={homeloginscss.blocoprincipal}>
        <Inputs
          value=""
          nometxt="email *"
          placeholder=""
          issenha={false}
          onchangevalue={handleEmail}
          tamanho={{ height: 30 }}
          emailwarn=""
          type="default"
          length={40}
        />
        <Inputs
          value=""
          nometxt="senha *"
          placeholder=""
          onchangevalue={handleSenha}
          issenha={true}
          tamanho={{ height: 30 }}
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
    </SafeAreaView>
  );
};
export default Entrarcuidador;
