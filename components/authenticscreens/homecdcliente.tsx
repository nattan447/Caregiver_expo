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
import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Homecliente"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Homecdcliente: React.FC<Props> = ({ navigation }) => {
  const irpaginacuidador = (): undefined => {
    navigation.navigate("Homecuidador");
  };
  const oi = (): undefined => {
    alert("ola");
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <StatusBar hidden={true}></StatusBar>
      <Authenticheadrs
        arrowimg={require("../../assets/arrowhead.png")}
        imgheader={require("../../assets/dog.png")}
        headertxt="SEJA UM CUIDADOR"
        trocarmodo={irpaginacuidador}
        ladoseta="flex-end"
      />

      {/* essa parte vai ser um componente */}
      <View style={homeloginscss.blocoprincipal}>
        <Text style={homeloginscss.blocoprincipaltxt}>Caregiver</Text>
        <Text style={homeloginscss.blocoprincipaltxt2}>Bem vindo</Text>
        <Text style={homeloginscss.blocoprincipaltxt3}>
          Se cadastre ou entre em uma conta e venha entrar nessa jornada conoso
          !
        </Text>
        <View style={homeloginscss.btndivs}>
          <Btn
            cor="#C77B43"
            txtbtn="ENTRAR"
            txtcor="#FFFCFC"
            pres={oi}
            fontsize={16}
            altura={48}
            largura={131}
          />
          <Btn
            cor="#F1EBEB"
            txtbtn="CADASTRAR"
            txtcor="#C77B43"
            pres={oi}
            fontsize={16}
            altura={48}
            largura={131}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Homecdcliente;
