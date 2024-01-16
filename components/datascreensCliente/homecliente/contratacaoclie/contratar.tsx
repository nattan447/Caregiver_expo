import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import React from "react";

import { useState, useEffect, useContext } from "react";

import { Clientedatacontext } from "../datacontext/clitentedata";

import homeloginscss from "../../../../estilos/homeloginscss";

import { Clientedatainterfc } from "../../../interfacests/clienteInterface";

import { contratarRootParams } from "../../../../types/contratarRootParams";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SearchbarHome } from "../../../homecomponents/contratarComponents/searchbar";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { Cards } from "../../../homecomponents/processComponents/data/cards";

import { CardContrado } from "../../../homecomponents/contratarComponents/cardContratado";

type PropsContratar = NativeStackScreenProps<
  InitialScreenParamList,
  "Contratar"
>;

const ContratarClie = ({ navigation }: PropsContratar) => {
  const { clienteData, setClienteData }: any = useContext(Clientedatacontext);

  const [cards, setCards] = useState(Cards);

  const [name, setName] = useState<string>("");

  const handleItem = (itm: string): void => {
    setName(itm);

    const mySearch = cards.filter((card) => card.prestador === itm);

    if (!mySearch[0]) {
      console.log("usuario não encontrado");

      setCards(Cards);
    } else {
      setCards(mySearch);
    }
  };

  return (
    <SafeAreaView style={contratarStyle.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={contratarStyle.contratarTxt}>Contratar</Text>

        <SearchbarHome value={name} onchange={handleItem} />

        {cards.map((card) => {
          return (
            <View style={contratarStyle.cardView} key={card.id}>
              <CardContrado
                typeService={card.typeService}
                img={require("../../../../assets/modelFace.jpg")}
                prestador={card.prestador}
                status={card.status}
                id={card.id}
                starsCounter={card.starsCounter}
                onpressVerPerfil={() =>
                  navigation.navigate("perfilContratado", card)
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export { ContratarClie };

const contratarStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contratarTxt: {
    color: "#C77B43",
    marginTop: "10%",
    fontSize: 24,
    alignSelf: "center",
  },
  cardView: {
    marginTop: "10%",
  },
});
