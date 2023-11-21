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

interface Propriedades {
  imgheader: number;
  headertxt: string;
  arrowimg: number;
  trocarmodo: React.FC;
}
interface Propriedadesbtn {
  txtbtn: string;
  cor: string;
  txtcor: string;
  pres: React.FC;
}
export const Authenticheadrs: React.FC<Propriedades> = (props) => {
  return (
    <View style={styles.header}>
      <Image source={props.imgheader} style={styles.img}></Image>
      <TouchableOpacity
        style={{ alignSelf: "flex-end", top: "60%" }}
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
    <>
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
        }}
      >
        <Text>{props.txtbtn}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "44%",
    width: "100%",
    backgroundColor: "F8F8F8",
  },
  headertxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: "60%",
    alignSelf: "center",
  },
  img: {
    height: "90%",
    width: "150%",
    position: "absolute",
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
  },
});
