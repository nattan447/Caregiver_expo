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
} from "react-native";

interface Propriedades {
  imglink: string;
  headertxt: string;
}

const Authenticheadrs: React.FC<Propriedades> = (props) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/img1.png")}
        style={styles.img}
      ></Image>

      <Image
        source={require("../../assets/arrowhead.png")}
        style={{ position: "relative", alignSelf: "flex-end", top: "60%" }}
      ></Image>

      {/* <Button
          title="ir para a outra página"
          onPress={irpaginacuidador}
        ></Button> */}

      <Text style={styles.headertxt}>SEJA UM CUIDADOR</Text>
    </View>
  );
};
export default Authenticheadrs;
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
    marginTop: 223,
    alignSelf: "center",
  },
  img: {
    height: "100%",
    width: "150%",
    position: "absolute",
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
  },
});
