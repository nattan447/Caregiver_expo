import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
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
  value: string | undefined;
  issenha: boolean;
  tamanho: TextStyle;
  emailwarn: string;
  type: KeyboardTypeOptions;
  length: number;
  multiline: boolean;
}

//componente dos inputs
const Inputs: React.FC<inputpropsInterface> = (props) => {
  return (
    <View style={styles.conponentsyle}>
      <Text style={styles.txt}>{props.nometxt}</Text>
      {/* <Text style={{ color: "red", fontSize: 10 }}>{props.emailwarn}</Text> */}
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        alignSelf: "center",
        marginTop: "10%",
      }}
    >
      <Text style={[styles.txt, { alignSelf: "flex-start" }]}>
        {props.textabove}
      </Text>
      <Picker
        placeholder="selecione o Estado"
        selectedValue={props.initialvalue}
        style={[
          styles.input,
          {
            borderWidth: 2,
            borderColor: "#dddddd",
            alignSelf: "center",
            width: "100%",
          },
        ]}
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

export const styles = StyleSheet.create({
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
    paddingLeft: 20,
    zIndex: 1,
    position: "relative",
    minWidth: 6,
  },
  txt: {
    marginBottom: 8,
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
