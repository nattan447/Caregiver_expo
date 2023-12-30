import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState, useEffect, useContext } from "react";
interface propsSearchBar {
  value: string;
  onchange: (itm: string) => void;
}
const SearchbarHome = (props: propsSearchBar) => {
  return (
    <TextInput
      value={props.value}
      onChangeText={props.onchange}
      placeholder="digite sua pesquisa"
      style={searhbarStyle.view}
    ></TextInput>
  );
};

export { SearchbarHome };

const searhbarStyle = StyleSheet.create({
  view: {
    backgroundColor: "#F1EBEB",
    width: "75%",
    height: 40,
    borderRadius: 7,
    paddingLeft: 14,
    borderColor: "black",
    borderWidth: 0.2,
  },
});
