import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import homeloginscss from "../../../../estilos/homeloginscss";

import { Btn } from "../../../../desginscomponents/authenticheadrs";

import { useState } from "react";

import { HeaderCard } from "../headerCard/headerCard";

type PropsCuidadorCard = {
  img: number;
  typeService: string;
  status: string;
  prestador: string;
  id: string;
  onpressDetails: () => void;
  onpressFavoritar: () => void;
};

const ConcluidoCard = (props: PropsCuidadorCard) => {
  return (
    <View style={pendentStyle.container}>
      <View style={pendentStyle.cardServico}>
        <HeaderCard
          typeService={props.typeService}
          status={props.status}
          prestador={props.prestador}
          img={props.img}
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="ver detalhes"
          txtcor="#D8A683"
          pres={props.onpressDetails}
          fontsize={15}
          altura={34}
          largura={200}
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="favoritar"
          txtcor="#D8A683"
          pres={props.onpressFavoritar}
          fontsize={15}
          altura={34}
          largura={200}
        />
      </View>
    </View>
  );
};

export { ConcluidoCard };

const pendentStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  cardServico: {
    backgroundColor: "#F8F8F8",
    height: "80%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 13,
  },
});
