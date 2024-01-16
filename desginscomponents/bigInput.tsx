import React from "react";
import { StyleSheet, Text, View, TextInput, TextStyle } from "react-native";
type BigInputProps = {
  nometxt: string;
  placeholder: string;
  onchangeValue: (content: string) => void;
  value: string | undefined;
};
const BigInput = (props: BigInputProps) => {
  return (
    <View style={BigInputStyle.container}>
      <Text style={BigInputStyle.txt}>{props.nometxt}</Text>
      <TextInput
        style={BigInputStyle.input}
        value={props.value}
        onChangeText={props.onchangeValue}
        placeholder={props.placeholder}
        multiline={true}
        numberOfLines={10}
        maxLength={200}
      ></TextInput>
    </View>
  );
};

export { BigInput };

const BigInputStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 280,
    alignSelf: "center",
    marginTop: "14%",
    height: 220,
  },

  input: {
    backgroundColor: "#F1EBEB",
    borderRadius: 5,
    width: 280,
    color: "#607D8B",
    paddingLeft: 20,
    minWidth: 6,
    borderWidth: 0.4,
    borderColor: "black",
  },
  txt: {
    marginBottom: 8,
    color: "#607D8B",
    fontSize: 16,
    alignSelf: "flex-start",
  },
});
