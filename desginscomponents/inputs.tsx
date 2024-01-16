import { StatusBar } from "expo-status-bar";

import React, { useRef } from "react";

import {
  StyleSheet,
  Text,
  View,
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
  value: string | undefined;
  issenha: boolean;
  tamanho: TextStyle;
  emailwarn: string;
  type: KeyboardTypeOptions;
  length: number;
  multiline: boolean;
}

interface comboxpropsInterface {
  arrayvalues: string[];
  initialvalue: string | undefined;
  onchange: (Itemvalue: string, itemIndex: number) => void;
  textabove: string;
  placeholder: string;
}

//componente da Combobox
export const Combobox: React.FC<comboxpropsInterface> = (props) => {
  const keyCounter = useRef<number>(0);

  const Pickeritem = props.arrayvalues.map((value) => {
    keyCounter.current++;
    return <Picker.Item label={value} value={value} key={keyCounter.current} />;
  });

  return (
    <View style={comboBoxStyle.container}>
      <Text style={[styles.txt, { alignSelf: "flex-start" }]}>
        {props.textabove}
      </Text>
      <Picker
        placeholder="selecione o Estado"
        selectedValue={props.initialvalue}
        style={comboBoxStyle.picker}
        onValueChange={props.onchange}
      >
        <Picker.Item
          value={null}
          label={props.placeholder}
          key={1999}
        ></Picker.Item>
        {Pickeritem}
      </Picker>
    </View>
  );
};

const comboBoxStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    marginTop: "10%",
  },
  picker: {
    backgroundColor: "#F1EBEB",
    color: "#D8A683",
    borderWidth: 2,
    borderColor: "#dddddd",
    alignSelf: "center",
    width: "100%",
  },
});

//componente dos inputs
const Inputs: React.FC<inputpropsInterface> = (props) => {
  return (
    <View style={styles.conponentsyle}>
      <Text style={styles.txt}>{props.nometxt}</Text>
      <TextInput
        multiline={props.multiline}
        numberOfLines={props.multiline ? 10 : 1}
        secureTextEntry={props.issenha}
        placeholder={props.placeholder}
        style={[styles.input, props.tamanho]}
        onChangeText={props.onchangevalue}
        keyboardType={props.type}
        maxLength={props.length}
      ></TextInput>
    </View>
  );
};
export default Inputs;

export const styles = StyleSheet.create({
  conponentsyle: {
    alignSelf: "center",
    height: 100,
    justifyContent: "center",
    padding: 10,
    margin: "6%",
  },
  input: {
    backgroundColor: "#F1EBEB",
    borderRadius: 5,
    width: 280,
    color: "#D8A683",
    paddingLeft: 20,
    minWidth: 6,
    borderWidth: 0.4,
    borderColor: "black",
  },
  txt: {
    marginBottom: 8,
    color: "#D8A683",
    fontSize: 16,
    fontWeight: "bold",
  },
});
