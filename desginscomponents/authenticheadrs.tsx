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
  trocarmodo: React.FC;
  ladoseta: any;
}
interface Propriedadesbtn {
  txtbtn: string;
  cor: string;
  txtcor: string;
  pres: React.FC;
  fontsize: number;
  altura: number;
  largura: number;
}

//componente do cabeçario das paginas
export const Authenticheadrs: React.FC<Propriedadesheader> = (props) => {
  return (
    <View style={styles.header}>
      <Image
        source={props.imgheader}
        style={styles.img}
        blurRadius={2}
        resizeMode="cover"
      ></Image>
      <TouchableOpacity
        style={{ alignSelf: props.ladoseta, position: "absolute", top: "40%" }}
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
    <View style={{ marginHorizontal: 33, marginTop: 80, alignSelf: "center" }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          height: props.altura + 2,
          width: props.largura,
          zIndex: 0,
          backgroundColor: "#dddddd",
          top: "6%",
          opacity: 1,
          borderRadius: 6,
        }}
      >
        <Text></Text>
      </TouchableOpacity>
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
    height: "50%",
    position: "absolute",
  },
  headertxt: {
    color: "#FFFCFC",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: "30%",
    alignSelf: "center",
    position: "absolute",
  },
  img: {
    position: "relative",
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
    height: "57%",
    width: "120%",
    top: 0,
  },
});
