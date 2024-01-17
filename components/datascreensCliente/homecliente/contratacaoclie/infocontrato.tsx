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

import { EnderecoInter } from "../../../interfacests/contratoInter";

import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import DateTimePicker from "@react-native-community/datetimepicker";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

type PropsInfoContrato = NativeStackScreenProps<
  InitialScreenParamList,
  "infoContrato"
>;

const InfoContratoCli = ({ navigation, route }: PropsInfoContrato) => {
  const [infoContrato, setInfoContrato] = useState<ContratoInfoInter>();

  const [showTime, setShowTime] = useState(false);

  const [date, setDate] = useState(new Date(1598051730000));

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

  const fetchApiCep = async () => {
    const cep = infoContrato?.endereco.cep;

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const fetchData = await fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!json.erro) {
          setInfoContrato({
            ...(infoContrato as ContratoInfoInter),
            endereco: {
              ...(infoContrato?.endereco as EnderecoInter),
              rua: json.logradouro,
              bairro: json.bairro,
              localidade: json.localidade,
              uf: json.uf,
            },
          });
        }
      })
      .catch((error) => {
        console.error("erro no cep ", error);

        alert("erro ao tentar encontrar o cep");
      });
  };

  const actualDate = new Date();

  const actualMonth = monthNames[actualDate.getMonth()].name;

  const days = monthNames[actualDate.getMonth()].day;

  const handleHour = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    setShowTime(false);

    const currentDate = selectedDate;

    setDate(currentDate as Date);

    setInfoContrato({
      ...(infoContrato as ContratoInfoInter),
      horario: currentDate,
    });
  };

  const handleDate = (Date: string) => {
    setInfoContrato({ ...(infoContrato as ContratoInfoInter), data: Date });
  };

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

  const handleCep = (Cep: string) =>
    setInfoContrato({
      ...(infoContrato as ContratoInfoInter),
      endereco: {
        ...(infoContrato?.endereco as EnderecoInter),
        cep: Cep,
      },
    });

  function proximo() {
    if (
      inputLengthCheck(infoContrato?.data) > 1 &&
      infoContrato?.horario &&
      infoContrato?.endereco
    ) {
      fetchApiCep();

      console.log(infoContrato.horario.toLocaleString());

      if (parseInt(infoContrato?.data as string) <= days) {
        infoContrato?.endereco.localidade
          ? navigation.navigate("pagamentoInfo", {
              ...infoContrato,
              horario: infoContrato.horario.toLocaleString(),
            })
          : alert("cep invalido");
      } else {
        alert("digite um dia válido");
      }
    } else {
      alert("preencha os dados obrigatórios");
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
          <Text>Dia</Text>
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

          {showTime ? (
            <DateTimePicker
              mode="time"
              value={date}
              is24Hour={true}
              testID="dateTimePicker"
              onChange={handleHour}
            />
          ) : undefined}

          <BigInput
            value={infoContrato?.msgSolicitacao}
            onchangeValue={handleMsgSolicitacao}
            nometxt="Mensagem de solicitação (*opcional)"
            placeholder=""
          />
          <View style={infoContratoStyle.maskedView}>
            <Text> horário em horas *</Text>

            <TouchableOpacity
              onPress={() => setShowTime(true)}
              style={infoContratoStyle.hourInput}
            >
              <Text>
                {infoContrato && infoContrato.horario
                  ? infoContrato?.horario
                      .toLocaleString()
                      .split("")
                      .filter((char, index) => index > 10)
                  : undefined}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={infoContratoStyle.maskedView}>
            <Text>Cep *</Text>

            <TextInputMask
              placeholder="digite o cep"
              style={infoContratoStyle.dateInput}
              maxLength={8}
              type={"only-numbers"}
              onChangeText={handleCep}
            />
          </View>

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
    paddingBottom: 10,
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
  maskedView: {
    marginTop: 30,
    alignItems: "center",
  },
  hourInput: {
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
    alignItems: "center",
    justifyContent: "center",
  },
});
