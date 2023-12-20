import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  Systrace,
  TouchableOpacity,
} from "react-native";

interface Propriedadesheader {
  imgheader: number;
  headertxt: string;
  arrowimg: number;
  trocarmodo: () => void;
  ladoseta: any;
}
interface Propriedadesbtn {
  txtbtn: string;
  cor: string;
  txtcor: string;
  pres: () => void;
  fontsize: number;
  altura: number;
  largura: number;
}

//componente do cabeçario das paginas
export const Authenticheadrs: React.FC<Propriedadesheader> = (props) => {
  return (
    <View style={styles.header}>
      <Image source={props.imgheader} style={styles.img}></Image>
      <TouchableOpacity
        style={{
          alignSelf: props.ladoseta,
          position: "absolute",
          top: "130%",
          marginHorizontal: "6%",
          height: "30%",

          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={props.trocarmodo}
      >
        <Image
          source={props.arrowimg}
          style={{
            position: "relative",
            height: 30,
            width: 30,
          }}
        ></Image>
      </TouchableOpacity>

      <Text style={styles.headertxt}>{props.headertxt}</Text>
    </View>
  );
};

//componente de btn
export const Btn: React.FC<Propriedadesbtn> = (props) => {
  return (
    <View
      style={{
        marginHorizontal: 33,
        alignSelf: "center",
        marginTop: "14%",
        marginBottom: "10%",
      }}
    >
      <View
        style={{
          position: "absolute",
          height: props.altura + 2,
          width: props.largura,
          zIndex: 0,
          backgroundColor: "#dddddd",

          opacity: 1,
          borderRadius: 6,
          borderStartColor: "black",
        }}
      >
        <Text></Text>
      </View>
      <TouchableOpacity
        style={{
          height: props.altura,
          width: props.largura,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
          position: "relative",
          borderColor: "#dddddd",
          borderWidth: 2,
          backgroundColor: props.cor,
          zIndex: 1,
        }}
        onPress={props.pres}
      >
        <Text
          style={{
            color: props.txtcor,
            fontWeight: "bold",
            fontSize: props.fontsize,
          }}
        >
          {props.txtbtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "30%",
    position: "absolute",
    alignItems: "center",
    paddingTop: "5%",
  },
  headertxt: {
    color: "#C77B43",
    fontSize: 24,
    top: "10%",
  },
  img: {
    height: 160,
    width: 160,
  },
});
