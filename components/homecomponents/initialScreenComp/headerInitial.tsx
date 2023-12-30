import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import homesty from "../../homecuid/estiloscuid/homesty";
import { useState, useEffect, useContext } from "react";
type propsHeader = {
  configBtnAct: () => void;
};
const HeaderInitial = (props: propsHeader) => {
  return (
    <View style={homesty.header}>
      <Text style={homesty.headertxt}>Caregiver</Text>
      <TouchableOpacity onPress={props.configBtnAct}>
        <Image
          source={require("../../../assets/gear.png")}
          style={{
            left: "240%",
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export { HeaderInitial };
