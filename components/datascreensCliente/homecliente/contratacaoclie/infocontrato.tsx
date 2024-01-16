import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";

import { useState } from "react";

import homeloginscss from "../../../../estilos/homeloginscss";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HeaderPerfil } from "../../../homecomponents/contratarComponents/headerPerfil/headerPerfil";

import { TextInputMask } from "react-native-masked-text";

import Inputs from "../../../../desginscomponents/inputs";

type PropsInfoContrato = NativeStackScreenProps<
  InitialScreenParamList,
  "infoContrato"
>;

const InfoContratoCli = ({ navigation }: PropsInfoContrato) => {
  const [date, setDate] = useState("");

  const handleDate = (Date: string) => setDate(Date);

  return (
    <View style={infoContratoStyle.container}>
      <HeaderPerfil
        img={require("../../../../assets/modelFace.jpg")}
        nome="Nattan Ferreira"
        cargo="Veterinário"
      />

      <View style={infoContratoStyle.main}>
        <Text> Data</Text>
        <TextInputMask
          placeholder="dia / mês"
          style={infoContratoStyle.dateInput}
          maxLength={4}
          value={date}
          type={"datetime"}
          options={{
            format: "DD/MM/",
          }}
          onChangeText={handleDate}
        />

        <Inputs
          multiline={false}
          value=""
          nometxt="horário em horas *"
          placeholder="ex : 22:00"
          onchangevalue={() => alert("ola")}
          issenha={false}
          tamanho={{ height: 40 }}
          emailwarn=""
          type="numeric"
          length={5}
        />
      </View>
    </View>
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
    backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    height: "100%",
    marginTop: 40,
  },
});
