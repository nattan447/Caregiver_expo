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

import { CuidadorCard } from "../../../homecomponents/processComponents/pendentComps/cuidadorCard";

import { Cards } from "../../../homecomponents/processComponents/data/cards";

import { ServiceDetailsInter } from "../../../interfacests/sercideDetailsInterface";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { InitialScreenParamList } from "../../../../types/initialScreenType";
import { useState } from "react";
import { ConcluidoCard } from "../../../homecomponents/processComponents/concluidoComponents/concluidoCard";

type PropsPendent = NativeStackScreenProps<InitialScreenParamList, "pendent">;

type dataQueryProps = {
  img: number;
  typeService: string;
  status: string;
  prestador: string;
  id: string;
};

const Pendent = ({ navigation }: PropsPendent) => {
  const [cards, setCards] = useState(Cards);

  function cancelservice(Id: string) {
    const cardNoRemoved = cards.filter((card) => card.id != Id);
    setCards(cardNoRemoved);
  }
  function renderComponent(data: dataQueryProps) {
    return (
      <CuidadorCard
        typeService={data.typeService}
        img={require("../../../../assets/modelFace.jpg")}
        prestador={data.prestador}
        status={data.status}
        id={data.id}
        calcelService={() => {
          const cardNoRemoved = cards.filter((card) => card.id != data.id);
          setCards(cardNoRemoved);
        }}
        onpresProposta={() =>
          navigation.navigate("propostaService", data as ServiceDetailsInter)
        }
      />
    );
  }

  return (
    <View style={pendentStyle.container}>
      <FlatList
        style={{ width: "100%" }}
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderComponent(item)}
      ></FlatList>
    </View>
  );
};

export { Pendent };

const pendentStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
