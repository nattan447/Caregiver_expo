import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";

import { ApiIbgeInterface } from "../../interfacests/apiIbgeInterface";

import { useState, useEffect, useRef } from "react";

import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";

import { AuthenticRootParamList } from "../../../types/authenticRoot";

import { Btn } from "../../../desginscomponents/authenticheadrs";

import homeloginscss from "../../../estilos/homeloginscss";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import React from "react";

import cadastro from "../../../estilos/cadastro";

import Inputs from "../../../desginscomponents/inputs";

import { Combobox } from "../../../desginscomponents/inputs";

import { inputLengthCheck } from "../../fuctions/inputCheck";

import { CheckBox } from "react-native-btr";

type PropsCadastroCuid3 = NativeStackScreenProps<
  AuthenticRootParamList,
  "Cadastrocuidador3"
>;

const Cadastrocuidador3 = ({ navigation, route }: PropsCadastroCuid3) => {
  const [cuidadordata, SetCuidadordata] = useState<Cuidadadordatainterfc>();

  const [ArrayEstado, SetArrayEstado] = useState<string[]>([]);

  const [isloadingEstados, setIsloadingEstados] = useState(true);

  const [EstadoValue, SetEstadoValue] = useState<string>("");

  const [isCheckedTerms, setIscCheckTerms] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const apiurl =
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
        const response = await fetch(apiurl);
        const data = await response.json();
        data.map((estado: ApiIbgeInterface) => {
          let accestado: string = estado.nome;
          SetArrayEstado((current) => [...current, estado.nome]);
        });
        console.log("sucesso ao acessar a api");
      } catch (error) {
        console.error("erro ao acessar api :" + error);
      } finally {
        setIsloadingEstados(false);
      }
    };

    fetchdata();

    if (route.params) {
      console.log("possui dados nos parametros");
      const { datacuidador }: { datacuidador?: Cuidadadordatainterfc } =
        route.params;
      if (datacuidador) {
        console.log("dados do cuidador existe");
        console.log(datacuidador);
        SetCuidadordata(datacuidador);
      }
    }
  }, []);

  const handelEstado = (Estado: string) => {
    if (!isloadingEstados) {
      if (Estado != null) {
        SetEstadoValue(Estado);
      }

      SetCuidadordata({
        ...(cuidadordata as Cuidadadordatainterfc),
        estado: Estado,
      });
    }
  };

  const handleCidade = (Cidade: string) => {
    SetCuidadordata({
      ...(cuidadordata as Cuidadadordatainterfc),
      cidade: Cidade,
    });
  };

  function handleRua(Rua: string) {
    SetCuidadordata({
      ...(cuidadordata as Cuidadadordatainterfc),
      rua: Rua,
    });
  }

  function handleCep(Cep: string) {
    SetCuidadordata({
      ...(cuidadordata as Cuidadadordatainterfc),
      cep: Cep,
    });
  }

  function handlePricePHour(Price: string) {
    SetCuidadordata({
      ...(cuidadordata as Cuidadadordatainterfc),
      pricePerHour: Price,
    });
  }

  const goHomeScreen = () => {
    if (inputLengthCheck(cuidadordata?.pricePerHour) >= 1) {
      if (cuidadordata?.cep) {
        if (inputLengthCheck(cuidadordata.cep) === 8) {
          isCheckedTerms
            ? navigation.navigate("Homenavigator", cuidadordata)
            : alert("aceite os termos antes de continuar");
        } else {
          alert("caracteres de cep insuficientes");
          console.error("não caracter suficientes no cep");
        }
      } else {
        console.log("usuário não colocou o cep e está tudo bem!");
        isCheckedTerms
          ? navigation.navigate(
              "Homenavigator",
              cuidadordata as Cuidadadordatainterfc
            )
          : alert("aceite os termos antes de continuar");
      }
    } else {
      alert("preencha todos dados obrigatórios");
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        {isloadingEstados ? (
          <ActivityIndicator size="large" color="orange" />
        ) : (
          <ScrollView
            automaticallyAdjustKeyboardInsets={true}
            style={{ width: "100%" }}
          >
            <Combobox
              placeholder="selecione o Estado"
              textabove="Estado"
              initialvalue={EstadoValue}
              onchange={handelEstado}
              arrayvalues={ArrayEstado}
            />

            <Inputs
              nometxt="cidade "
              placeholder="digite sua cidade"
              value={cuidadordata?.cidade}
              onchangevalue={handleCidade}
              issenha={false}
              tamanho={{ height: 40 }}
              emailwarn=""
              type="default"
              length={40}
              multiline={false}
            />
            <Inputs
              nometxt="rua "
              placeholder="digite sua rua"
              value={cuidadordata?.rua}
              onchangevalue={handleRua}
              issenha={false}
              tamanho={{ height: 40 }}
              emailwarn=""
              type="default"
              length={40}
              multiline={false}
            />
            <Inputs
              nometxt="preço/hora/em rais* "
              placeholder="preço por hora de seu serviço"
              value={cuidadordata?.pricePerHour}
              onchangevalue={handlePricePHour}
              issenha={false}
              tamanho={{ height: 40 }}
              emailwarn=""
              type="numeric"
              length={40}
              multiline={false}
            />
            <Inputs
              nometxt="cep "
              placeholder="digite seu cep"
              value={cuidadordata?.cep}
              onchangevalue={handleCep}
              issenha={false}
              tamanho={{ height: 40 }}
              emailwarn=""
              type="numeric"
              length={8}
              multiline={false}
            />

            <View style={cadastroCuidStyle.CheckBoxViw}>
              <View style={{ width: "5%", left: 40 }}>
                <CheckBox
                  checked={isCheckedTerms}
                  onPress={() => setIscCheckTerms(!isCheckedTerms)}
                ></CheckBox>
              </View>

              <Text>concordo com os termos de uso da Caregiver</Text>
            </View>
            <Btn
              cor="#F1EBEB"
              txtbtn="cadastrar"
              txtcor="#C77B43"
              pres={goHomeScreen}
              fontsize={16}
              altura={40}
              largura={100}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador3;

const cadastroCuidStyle = StyleSheet.create({
  CheckBoxViw: {
    width: "100%",
    height: "2%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
