import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";

import { useState, useEffect, useContext } from "react";
import { Clientedatacontext } from "../datacontext/clitentedata";
import homeloginscss from "../../../../estilos/homeloginscss";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
import { RootStackParamListContratar } from "./contratarnavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchbarHome } from "../../../homecomponents/contratarComponents/searchbar";

type ContratarScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListContratar,
  "Contratar"
>;

type Navigationprops = {
  navigation: ContratarScreenNavigationProp;
};
interface Search {
  nome: string;
  idade: number;
}
const ContratarClie: React.FC<Navigationprops> = ({ navigation }) => {
  const Irperfil = (): void => {
    navigation.navigate("perfil", cuidadordataState);
  };
  const Items = [
    { nome: "nattan", idade: 18 },
    { nome: "felipe", idade: 15 },
    { nome: "fernando", idade: 10 },
    { nome: "gabriel", idade: 28 },
  ];
  const [item, setItem] = useState<string>("");
  const [nome, setNome] = useState<Search>();
  const handleItem = (itm: string): void => {
    setItem(itm);
  };
  const searchItem = () => {
    const mysearch = Items.filter((data) => data.nome == item.toLowerCase());
    setNome(mysearch[0]);
  };
  const cuidadordataState: Clientedatainterfc | undefined =
    useContext(Clientedatacontext);

  useEffect(() => {
    console.log(cuidadordataState);
  }, []);

  return (
    <View style={homeloginscss.container}>
      {/* <Text>Contratar</Text> */}
      <SearchbarHome value={item} onchange={handleItem} />
      <Button title="pesquisar" onPress={searchItem}></Button>
      <Text>nome:{nome?.nome}</Text>
      <Text>idade:{nome?.idade}</Text>
      {/* <Button onPress={Irperfil} title="contrate"></Button> */}
    </View>
  );
};
export { ContratarClie };
