import { Text, View, StyleSheet, DevSettings } from "react-native";

import { Btn } from "../../../../../desginscomponents/authenticheadrs";

import React from "react";

import StarRating from "react-native-star-rating";

import { useState, useEffect } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { InitialScreenParamList } from "../../../../../types/initialScreenType";

type PropsProposta = NativeStackScreenProps<
  InitialScreenParamList,
  "propostaService"
>;

import { HeaderCard } from "../../../../homecomponents/processComponents/headerCard/headerCard";

import { ServiceDetailsInter } from "../../../../interfacests/sercideDetailsInterface";

const Proposta = ({ route }: PropsProposta) => {
  const [propostaDetails, setPropostaDetails] = useState<ServiceDetailsInter>();

  useEffect(() => {
    if (route.params) {
      setPropostaDetails(route.params);
      console.log(route.params);
      console.log("detalhes da proposta");
      console.info(route.params);
    } else {
      console.error("erro ao pegar os detalher do serviço");
    }
  }, []);

  return (
    <View style={propostaStyle.container}>
      <HeaderCard
        typeService={propostaDetails?.typeService as string}
        status={propostaDetails?.status as string}
        prestador={propostaDetails?.prestador as string}
        img={propostaDetails?.img as number}
      />

      <Text style={propostaStyle.detailsTxt}>Dependente</Text>
    </View>
  );
};

export { Proposta };

const propostaStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  detailsTxt: {
    color: "#C77B43",
    fontSize: 24,
    marginTop: "8%",
  },
  infoView: {
    marginTop: "20%",
    // backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    height: "30%",
  },
  avaliacao: {
    // backgroundColor: "gray",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    height: "40%",
  },
  avaliacaoTxt: {
    color: "#C77B43",
    fontSize: 20,
  },
});
