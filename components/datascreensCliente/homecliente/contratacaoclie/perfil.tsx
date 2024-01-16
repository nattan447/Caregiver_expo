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

import React, { useEffect } from "react";

import { useState } from "react";

import homeloginscss from "../../../../estilos/homeloginscss";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Clientedatainterfc } from "../../../interfacests/clienteInterface";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { ServiceDetailsInter } from "../../../interfacests/sercideDetailsInterface";

import { Pendent } from "../processoScrens/pendent";

import { Btn } from "../../../../desginscomponents/authenticheadrs";

import { HeaderPerfil } from "../../../homecomponents/contratarComponents/headerPerfil/headerPerfil";
import { Cuidadadordatainterfc } from "../../../interfacests/cuidadordata";

type PropsPerfilContratado = NativeStackScreenProps<
  InitialScreenParamList,
  "perfilContratado"
>;

const PerfilContratado = ({ navigation, route }: PropsPerfilContratado) => {
  const [cuidadorPerfil, setCuidadorPerfil] = useState<ServiceDetailsInter>();

  useEffect(() => {
    if (route.params) {
      console.log("possui dados nos parametros");
      setCuidadorPerfil(route.params);
      console.log(route.params);
    } else {
      console.error("não possui dados nos parametros");
    }
  }, []);

  return (
    <SafeAreaView style={perfilStyle.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={perfilStyle.headerTxt}>Perfil do cuidador</Text>

        <HeaderPerfil
          img={cuidadorPerfil?.img as number}
          nome={cuidadorPerfil?.prestador as string}
          cargo={cuidadorPerfil?.typeService as string}
        />

        <View style={perfilStyle.main}>
          <Text style={{ fontSize: 17 }}>Descrição</Text>
          <Text style={perfilStyle.descricao}>
            Hikikomori é um transtorno mental marcado por isolamento social
            grave, físico e interpessoal, que dura ao menos seis meses. Em 1998,
            o psicólogo Tamaki Saito comparou o comportamento ao de uma
            "adolescência prolongada" e cunhou o termo hikikomori no livro
            Isolamento social: uma adolescência sem
          </Text>

          <Text style={{ marginTop: 10 }}>certificados</Text>
          <View style={perfilStyle.certificado}>
            <Text>nenhum</Text>
          </View>

          <View style={perfilStyle.btnView}>
            <Btn
              cor="#F1EBEB"
              txtbtn="solicitar"
              txtcor="#C77B43"
              pres={() => {
                if (cuidadorPerfil)
                  navigation.navigate("infoContrato", cuidadorPerfil);
              }}
              fontsize={16}
              altura={40}
              largura={131}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export { PerfilContratado };

const perfilStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  headerTxt: {
    color: "#C77B43",
    fontSize: 24,
    marginTop: "7%",
    alignSelf: "center",
  },

  main: {
    // backgroundColor: "red",
    height: "100%",
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  descricao: {
    marginTop: 20,
    color: "gray",
  },
  viewCertificado: {
    marginTop: "10%",
  },
  imgCertificado: {
    height: 90,
    width: 90,
  },
  certificado: {
    alignItems: "center",
    backgroundColor: "#F1EBEB",
    borderRadius: 5,
    width: 240,
    color: "#D8A683",
    height: 120,
    justifyContent: "center",
    marginTop: 10,
  },
  btnView: {
    height: 300,
  },
});
