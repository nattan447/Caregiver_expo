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
} from "react-native";

interface inputprops {
  nometxt: string;
  placeholder: string;
  onchangevalue: (texto: string) => void;
  value: string;
  issenha: boolean;
}

const Inputs: React.FC<inputprops> = (props) => {
  return (
    <View style={styles.conponentsyle}>
      <Text style={styles.txt}>{props.nometxt}</Text>
      <TextInput
        secureTextEntry={props.issenha}
        placeholder={props.placeholder}
        style={styles.input}
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
    height: 80,
    justifyContent: "center",
    padding: 10,
    marginTop: "5%",
  },
  input: {
    backgroundColor: "#F1EBEB",
    borderRadius: 5,
    width: 240,
    height: 30,
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
    backgroundColor: "#00000080",
    position: "relative",
    width: 240,
    borderRadius: 10,
    alignSelf: "center",
    bottom: 17,
  },
});
