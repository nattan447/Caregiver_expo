import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import { useEffect, useState, useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthenticRootParamList } from "../../../../types/authenticRoot";

import { Btn } from "../../../../desginscomponents/authenticheadrs";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Clientedatacontext } from "../datacontext/clitentedata";

import React from "react";

import { CardContrado } from "../../../homecomponents/contratarComponents/cardContratado";

import { SearchbarHome } from "../../../homecomponents/contratarComponents/searchbar";

import { ServiceDetailsInter } from "../../../interfacests/sercideDetailsInterface";

import { Cards } from "../../../homecomponents/processComponents/data/cards";

import { contratarStyle } from "../contratacaoclie/contratar";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

type PropsFavoritos = NativeStackScreenProps<
  InitialScreenParamList,
  "Contratar"
>;

const FavoritosCli = ({ navigation }: PropsFavoritos) => {
  const { clienteData, setClienteData }: any = useContext(Clientedatacontext);

  const [cards, setCards] = useState(Cards);

  useEffect(() => {
    console.log(clienteData);
  }, []);

  return (
    <SafeAreaView style={styleFavorios.container}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={contratarStyle.contratarTxt}>favoritos</Text>
        {cards.map((card: ServiceDetailsInter) => {
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

export { FavoritosCli };

const styleFavorios = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
