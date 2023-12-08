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
import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Autenticacaocuid"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Autenticacaocuid: React.FC<Props> = ({ navigation }) => {
  const irpaginacliente = (): undefined => {
    navigation.navigate("Autenticacaocli");
  };
  const irCadastrocuidador = (): undefined => {
    navigation.navigate("Cadastrocuidador");
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <StatusBar hidden={true}></StatusBar>
      <Authenticheadrs
        arrowimg={require("../../assets/arrowheadleft.png")}
        imgheader={require("../../assets/img2head.png")}
        headertxt="SEJA NOSSO CLIENTE"
        trocarmodo={irpaginacliente}
        ladoseta="flex-start"
      />

      {/* essa parte vai ser um componente */}
      <View style={homeloginscss.blocoprincipal}>
        <Text style={homeloginscss.blocoprincipaltxt}>Caregiver</Text>
        <Text style={homeloginscss.blocoprincipaltxt2}>Bem vindo</Text>
        <Text style={homeloginscss.blocoprincipaltxt3}>
          Um cuidador é responsável por auxiliar pessoas com necessidades
          especiais em atividades diárias, administrar medicamentos, garantir
          segurança e fornecer apoio emocional
        </Text>
        <View style={homeloginscss.btndivs}>
          {/*esse btns seráo componentes separados*/}
          {/* <TouchableOpacity style={homeloginscss.shadow}>
            <Text></Text>
          </TouchableOpacity> */}
          <Btn
            cor="#C77B43"
            txtbtn="ENTRAR"
            txtcor="#FFFCFC"
            pres={irCadastrocuidador}
            fontsize={16}
            altura={48}
            largura={131}
          />

          <Btn
            cor="#F1EBEB"
            txtbtn="CADASTRAR"
            txtcor="#C77B43"
            pres={irCadastrocuidador}
            fontsize={16}
            altura={48}
            largura={131}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Autenticacaocuid;
