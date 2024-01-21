import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { Btn } from "../../../../desginscomponents/authenticheadrs";

import { useState } from "react";

import { HeaderCard } from "../headerCard/headerCard";

type PropsCuidadorCard = {
  img: number;
  typeService: string;
  status: string;
  prestador: string;
  id: string;
  calcelService: () => void;
  onpresProposta: () => void;
};

const CuidadorCard = (props: PropsCuidadorCard) => {
  return (
    <View style={pendentStyle.container}>
      <View style={pendentStyle.cardServico}>
        <HeaderCard
          typeService={props.typeService}
          status={props.status}
          prestador={props.prestador}
          img={props.img}
        />
        <TouchableOpacity
          style={pendentStyle.txt}
          onPress={props.onpresProposta}
        >
          <Text style={pendentStyle.txtProposta}>ver proposta</Text>
        </TouchableOpacity>
        <Btn
          cor="#F1EBEB"
          txtbtn="CANCELAR"
          txtcor="#E64A19"
          pres={props.calcelService}
          fontsize={10}
          altura={34}
          largura={100}
        />
      </View>
    </View>
  );
};

export { CuidadorCard };

const pendentStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  cardServico: {
    backgroundColor: "#F8F8F8",
    height: "75%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 13,
  },
  txt: {
    marginTop: 27,
  },
  txtProposta: {
    top: 10,
    color: "#607D8B",
  },
});
