import { Text, View, Button, StyleSheet, FlatList } from "react-native";

import homeloginscss from "../../../../estilos/homeloginscss";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ProcessRootParams } from "../../../../types/processRootParams";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { ConcluidoCard } from "../../../homecomponents/processComponents/concluidoComponents/concluidoCard";

import { Cards } from "../../../homecomponents/processComponents/data/cards";

import { ServiceDetailsInter } from "../../../interfacests/sercideDetailsInterface";

type PropsFinished = NativeStackScreenProps<InitialScreenParamList, "finished">;

type dataQueryProps = {
  img: number;
  typeService: string;
  status: string;
  prestador: string;
  id: string;
};

const Finished = ({ navigation }: PropsFinished) => {
  function renderComponent(data: dataQueryProps) {
    return (
      <ConcluidoCard
        typeService={data.typeService}
        img={require("../../../../assets/modelFace.jpg")}
        prestador={data.prestador}
        status={data.status}
        id={data.id}
        onpressDetails={() =>
          navigation.navigate("serviceDetails", data as ServiceDetailsInter)
        }
        onpressFavoritar={() => alert("favoriotu")}
      />
    );
  }

  return (
    <View style={finishedStyle.container}>
      <FlatList
        style={{ width: "100%" }}
        data={Cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderComponent(item)}
      ></FlatList>
    </View>
  );
};
export { Finished };

const finishedStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
