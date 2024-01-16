import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useState } from "react";

import { Btn } from "../../../desginscomponents/authenticheadrs";

import { HeaderCard } from "../processComponents/headerCard/headerCard";

import StarRating from "react-native-star-rating";

type PropsCardContratado = {
  img: number;
  typeService: string;
  status: string;
  prestador: string;
  id: string;
  onpressVerPerfil: () => void;
  starsCounter: number;
};

const CardContrado = (props: PropsCardContratado) => {
  const [starCount, setStarCount] = useState<number>(props.starsCounter);

  return (
    <View style={pendentStyle.container}>
      <TouchableOpacity
        style={{ width: "100%", alignItems: "center" }}
        onPress={props.onpressVerPerfil}
      >
        <View style={pendentStyle.cardServico}>
          <Image
            source={require("../../../assets/modelFace.jpg")}
            style={pendentStyle.img}
          ></Image>
          <Text style={pendentStyle.prestadorTxt}>{props.prestador}</Text>
          <Text style={pendentStyle.txt}>
            tipo de serviço :{props.typeService}
          </Text>
          <Text style={pendentStyle.txt}>cidade:{props.typeService}</Text>
          <StarRating
            containerStyle={{ margin: 40 }}
            disabled={false}
            maxStars={5}
            rating={starCount}
            starSize={30}
            fullStarColor="#F5DD03"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export { CardContrado };

const pendentStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  cardServico: {
    backgroundColor: "#F8F8F8",
    height: "100%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 13,
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  txt: {
    marginTop: 24,
  },
  prestadorTxt: {
    fontSize: 20,
    color: "#607D8B",
    marginTop: 12,
  },
});
