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
      placeholder="digite o nome"
      style={searhbarStyle.view}
    ></TextInput>
  );
};

export { SearchbarHome };

const searhbarStyle = StyleSheet.create({
  view: {
    backgroundColor: "#F1EBEB",
    width: "90%",
    height: 40,
    borderRadius: 5,
    paddingLeft: 14,
    borderColor: "black",
    borderWidth: 0.2,
    marginTop: "10%",
    alignSelf: "center",
    marginBottom: "8%",
  },
});
