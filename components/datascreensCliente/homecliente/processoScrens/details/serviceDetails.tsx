import { Text, View, StyleSheet, DevSettings } from "react-native";

import { Btn } from "../../../../../desginscomponents/authenticheadrs";

import React from "react";

import StarRating from "react-native-star-rating";

import { useState, useEffect } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { InitialScreenParamList } from "../../../../../types/initialScreenType";

type PropsServiceDerails = NativeStackScreenProps<
  InitialScreenParamList,
  "serviceDetails"
>;

import { ServiceDetailsInter } from "../../../../interfacests/sercideDetailsInterface";

const ServiceDetails = ({ route }: PropsServiceDerails) => {
  const [starCount, setStarCount] = useState<number>(0);

  const [serviceDetails, setServiceDetails] = useState<ServiceDetailsInter>();

  useEffect(() => {
    if (route.params) {
      setServiceDetails(route.params);
      console.log("detalhes do serviço estão presentes");
      console.info(route.params);
    } else {
      console.error("erro ao pegar os detalher do serviço");
    }
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const myDate = new Date();

  const month = months[myDate.getMonth()];

  return (
    <View style={detailsStyle.container}>
      <Text style={detailsStyle.detailsTxt}>detalhes do serviço</Text>

      <View style={detailsStyle.infoView}>
        <Text>prestador : {serviceDetails?.prestador}</Text>
        <Text>tipo de serviço : {serviceDetails?.typeService} </Text>
        <Text>conclusão :{month} </Text>
        <Text>valor pago : {serviceDetails?.valor}</Text>
      </View>
      <View style={detailsStyle.avaliacao}>
        <Text style={detailsStyle.avaliacaoTxt}>avaliação do servico</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={starCount}
          selectedStar={(rating) => setStarCount(rating)}
          starSize={30}
          fullStarColor="#F5DD03"
        />

        <Btn
          cor="#F1EBEB"
          txtbtn="ENVIAR"
          txtcor="#C77B43"
          pres={() => alert("avaliação enviada")}
          fontsize={10}
          altura={34}
          largura={100}
        />
      </View>
    </View>
  );
};

export { ServiceDetails };

const detailsStyle = StyleSheet.create({
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
