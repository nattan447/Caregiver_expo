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
    navigation.navigate("Homecuidador", { nome: "nattan" });
  };
  const oi = (): undefined => {
    alert("ola");
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <Authenticheadrs
        arrowimg={require("../../assets/arrowhead.png")}
        imgheader={require("../../assets/img1.png")}
        headertxt="SEJA UM CUIDADOR"
        trocarmodo={irpaginacuidador}
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
          {/*esse btns seráo componentes separados*/}
          {/* <TouchableOpacity style={homeloginscss.shadow}>
            <Text></Text>
          </TouchableOpacity> */}
          <Btn
            cor="#C77B43"
            txtbtn="SING IN"
            txtcor="#FFFCFC"
            pres={oi}
            fontsize={16}
          />
          <Btn
            cor="#C77B43"
            txtbtn="SING UP"
            txtcor="#FFFCFC"
            pres={oi}
            fontsize={16}
          />
          {/* <TouchableOpacity style={homeloginscss.btn2}>
            <Text style={homeloginscss.txtbtn2}>SING UP</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Homecdcliente;
