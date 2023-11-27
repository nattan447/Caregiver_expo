import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  TextStyle,
} from "react-native";

interface inputprops {
  nometxt: string;
  placeholder: string;
  onchangevalue: (texto: string) => void;
  value: string;
  issenha: boolean;
  tamanho: TextStyle;
  emailwarn: string;
}

const Inputs: React.FC<inputprops> = (props) => {
  return (
    <View style={styles.conponentsyle}>
      <Text style={styles.txt}>{props.nometxt}</Text>
      <Text style={{ color: "red", fontSize: 10 }}>{props.emailwarn}</Text>
      <TextInput
        secureTextEntry={props.issenha}
        placeholder={props.placeholder}
        style={[styles.input, props.tamanho]}
        value={props.value}
        onChangeText={props.onchangevalue}
      ></TextInput>
      <View style={styles.shadow}>
        <Text></Text>
      </View>
    </View>
  );
};
export default Inputs;
const styles = StyleSheet.create({
  conponentsyle: {
    position: "relative",
    alignSelf: "center",
    height: 100,
    justifyContent: "center",
    padding: 10,
    marginTop: "5%",
  },
  input: {
    backgroundColor: "#F1EBEB",
    borderRadius: 5,
    width: 240,
    color: "#D8A683",
    paddingLeft: 8,
    zIndex: 1,
    position: "relative",
  },
  txt: {
    marginBottom: 10,
    color: "#D8A683",
    fontSize: 16,
    fontWeight: "bold",
  },
  shadow: {
    backgroundColor: "#dddddd",
    position: "relative",
    width: 240,
    borderRadius: 10,
    alignSelf: "center",
    bottom: 15,
  },
});
