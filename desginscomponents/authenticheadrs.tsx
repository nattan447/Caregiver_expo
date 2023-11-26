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
}
export const Authenticheadrs: React.FC<Propriedadesheader> = (props) => {
  return (
    <View style={styles.header}>
      <Image source={props.imgheader} style={styles.img} blurRadius={2}></Image>
      <TouchableOpacity
        style={{ alignSelf: props.ladoseta, top: "60%" }}
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
    <View style={{ marginHorizontal: 33 }}>
      <TouchableOpacity style={styles.shadow}>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 48,
          width: 131,
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
    height: "42%",
    width: "100%",
    backgroundColor: "black",
  },
  headertxt: {
    color: "#FFFCFC",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: "60%",
    alignSelf: "center",
  },
  img: {
    position: "absolute",
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
    height: "100%",
  },
  shadow: {
    position: "absolute",
    height: 48,
    width: 131,
    zIndex: 0,
    backgroundColor: "#dddddd",
    top: "6%",
    opacity: 1,
    borderRadius: 6,
  },
});
