import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../estilos/cadastro";
import Inputs from "../../desginscomponents/inputs";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Cadastrocuidador"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Cadastrocuidador: React.FC<Props> = ({ navigation }) => {
  const voltarautentic = (): undefined => {
    navigation.navigate("Homecuidador");
  };
  return (
    <SafeAreaView style={homeloginscss.container}>
      <Authenticheadrs
        arrowimg={require("../../assets/arrowheadleft.png")}
        imgheader={require("../../assets/dogwoman.png")}
        headertxt="CRIAR CONTA"
        trocarmodo={voltarautentic}
        ladoseta="flex-start"
      />

      <View style={cadastro.cadastroview}>
        <Inputs nometxt="Nome" placeholder="digite seu nome aqui" />
        {/*isso daqui vai ser um componente*/}
        {/* <View
          style={{
            backgroundColor: "red",
            position: "absolute",
            alignSelf: "center",
            height: 80,
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Text style={{ marginBottom: 10 }}>nome</Text>
          <TextInput
            placeholder="digite o seu nome aqui"
            style={{
              backgroundColor: "#F1EBEB",
              borderRadius: 10,
              width: 240,
              height: 30,
              color: "black",
              paddingLeft: 8,
              zIndex: 1,
              position: "relative",
            }}
          ></TextInput>
          <View
            style={{
              backgroundColor: "#dddddd",
              position: "relative",
              width: 240,
              borderRadius: 10,
              alignSelf: "center",
              bottom: 17,
            }}
          >
            <Text></Text>
          </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador;
