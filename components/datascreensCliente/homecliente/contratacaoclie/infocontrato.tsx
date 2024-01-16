import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import React, { useEffect } from "react";

import { useState } from "react";

import homeloginscss from "../../../../estilos/homeloginscss";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HeaderPerfil } from "../../../homecomponents/contratarComponents/headerPerfil/headerPerfil";

import { TextInputMask } from "react-native-masked-text";

import Inputs from "../../../../desginscomponents/inputs";

import { BigInput } from "../../../../desginscomponents/bigInput";

import { Combobox } from "../../../../desginscomponents/inputs";

import { Btn } from "../../../../desginscomponents/authenticheadrs";

import { ContratoInfoInter } from "../../../interfacests/contratoInter";

import { inputLengthCheck } from "../../../fuctions/inputCheck";

import { monthNames } from "./mesesData/meses";
import { ServiceDetailsInter } from "../../../interfacests/sercideDetailsInterface";
import { PerfilContratado } from "./perfil";

type PropsInfoContrato = NativeStackScreenProps<
  InitialScreenParamList,
  "infoContrato"
>;

const InfoContratoCli = ({ navigation, route }: PropsInfoContrato) => {
  const [infoContrato, setInfoContrato] = useState<ContratoInfoInter>();

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

  const actualDate = new Date();

  const actualMonth = monthNames[actualDate.getMonth()].name;

  const days = monthNames[actualDate.getMonth()].day;

  const handleHour = (Hour: string) =>
    setInfoContrato({ ...(infoContrato as ContratoInfoInter), horario: Hour });

  const handleDate = (Date: string) =>
    setInfoContrato({ ...(infoContrato as ContratoInfoInter), data: Date });

  const handleMsgSolicitacao = (msg: string) =>
    setInfoContrato({
      ...(infoContrato as ContratoInfoInter),
      msgSolicitacao: msg,
    });

  const handleDependente = (dep: string) =>
    setInfoContrato({
      ...(infoContrato as ContratoInfoInter),
      dependente: dep,
    });

  function proximo() {
    console.log(infoContrato);
    if (
      inputLengthCheck(infoContrato?.data) > 1 &&
      inputLengthCheck(infoContrato?.horario) > 1
    ) {
      const arrayChar = infoContrato?.horario.split("");
      if (infoContrato?.data) {
        if (parseInt(infoContrato?.data) <= days) {
          console.log("passou nos  testes dos dias");
          if (inputLengthCheck(infoContrato.horario) >= 2) {
            console.log("passou no teste das horas");
          } else {
            console.error("não prencheu o campo das horas de manerira certa");
            alert("preencha o campo de horas da maneira correta");
          }
        } else {
          console.error("não existe esse dia");
          alert("digite um dia válido");
        }
      }
    } else {
      alert("preencha os dados obrigatórios");
      console.error("não preencheu os dados obrigatórios");
    }
  }

  return (
    <SafeAreaView style={infoContratoStyle.container}>
      <ScrollView style={{ width: "100%" }}>
        <HeaderPerfil
          img={cuidadorPerfil?.img}
          nome={cuidadorPerfil?.prestador as string}
          cargo={cuidadorPerfil?.typeService as string}
        />

        <View style={infoContratoStyle.main}>
          <Text> Data</Text>
          <TextInputMask
            placeholder="dia"
            style={infoContratoStyle.dateInput}
            maxLength={2}
            value={infoContrato?.data}
            type={"datetime"}
            options={{
              format: "DD",
            }}
            onChangeText={handleDate}
          />

          <BigInput
            value={infoContrato?.msgSolicitacao}
            onchangeValue={handleMsgSolicitacao}
            nometxt="Mensagem de solicitação (*opcional)"
            placeholder=""
          />
          <Text> horário em horas *</Text>
          <TextInputMask
            placeholder="hora : minuto"
            style={infoContratoStyle.dateInput}
            maxLength={5}
            value={infoContrato?.horario}
            type={"datetime"}
            options={{
              format: "HH:MM",
            }}
            onChangeText={handleHour}
          />

          <View style={infoContratoStyle.dependenteView}>
            <Combobox
              placeholder="selecione o dependente"
              textabove="dependente "
              initialvalue={infoContrato?.dependente}
              onchange={handleDependente}
              arrayvalues={["Dep 1", "Dep 2", "Dep 3", "Dep 4"]}
            />
          </View>
          <Btn
            cor="#F1EBEB"
            txtbtn="próximo"
            txtcor="#C77B43"
            pres={proximo}
            fontsize={16}
            altura={45}
            largura={140}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { InfoContratoCli };

const infoContratoStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  dateInput: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#dddddd",
    backgroundColor: "#F1EBEB",
    borderRadius: 5,
    width: 200,
    color: "#D8A683",
    paddingLeft: 20,
    minWidth: 6,
    borderWidth: 0.4,
    marginTop: 14,
  },
  main: {
    // backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  dependenteView: {
    width: "100%",
    paddingBottom: 20,
  },
  // input: {
  //   backgroundColor: "#F1EBEB",
  //   borderRadius: 5,
  //   width: 280,
  //   color: "#D8A683",
  //   paddingLeft: 20,
  //   minWidth: 6,
  //   borderWidth: 0.4,
  //   borderColor: "black",
  //   height: 35,
  //   margin: 30,
  // },
});
