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
  KeyboardTypeOptions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";

interface inputpropsInterface {
  nometxt: string;
  placeholder: string;
  onchangevalue: (texto: string) => void;
  value: string;
  issenha: boolean;
  tamanho: TextStyle;
  emailwarn: string;
  type: KeyboardTypeOptions;
  length: number;
}

//componente dos inputs
const Inputs: React.FC<inputpropsInterface> = (props) => {
  return (
    <View style={styles.conponentsyle}>
      <Text style={styles.txt}>{props.nometxt}</Text>
      {/* <Text style={{ color: "red", fontSize: 10 }}>{props.emailwarn}</Text> */}
      <TextInput
        secureTextEntry={props.issenha}
        placeholder={props.placeholder}
        style={[styles.input, props.tamanho]}
        onChangeText={props.onchangevalue}
        keyboardType={props.type}
        maxLength={props.length}
      ></TextInput>
      <View style={styles.shadow}>
        <Text></Text>
      </View>
    </View>
  );
};
export default Inputs;

interface comboxpropsInterface {
  arrayvalues: string[];
  initialvalue: string;
  onchange: (Itemvalue: string, itemIndex: number) => void;
}

//componente da Combobox

export const Combobox: React.FC<comboxpropsInterface> = (props) => {
  const Pickeritem = props.arrayvalues.map((value) => {
    return <Picker.Item label={value} value={value} />;
  });

  return (
    <View>
      <Picker
        selectedValue={props.initialvalue}
        style={{ height: 50, width: 150, backgroundColor: "red" }}
        onValueChange={props.onchange}
      >
        {Pickeritem}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  conponentsyle: {
    position: "relative",
    alignSelf: "center",
    height: 100,
    justifyContent: "center",
    padding: 10,
    margin: "6%",
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
