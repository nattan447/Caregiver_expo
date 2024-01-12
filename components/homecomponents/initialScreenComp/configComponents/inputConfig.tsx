import { Text, View, TextInput, KeyboardType } from "react-native";

import { EditProfileStyle } from "../../../datascreensCliente/homecliente/initialscreen/styles/editProfileStyle";

type propsInputEdit = {
  txt: string;
  placeholder: string;
  value: string | undefined;
  onchangeValue: (value: string) => void;
  isPassWord: boolean;
  maxLength: number;
  type: KeyboardType;
};

const InputConfig = (props: propsInputEdit) => {
  return (
    <View style={EditProfileStyle.inputView}>
      <Text style={EditProfileStyle.txt}>{props.txt}</Text>
      <TextInput
        maxLength={props.maxLength}
        secureTextEntry={props.isPassWord}
        value={props.value}
        placeholder={props.placeholder}
        style={EditProfileStyle.input}
        onChangeText={props.onchangeValue}
        keyboardType={props.type}
      ></TextInput>
    </View>
  );
};

export { InputConfig };
