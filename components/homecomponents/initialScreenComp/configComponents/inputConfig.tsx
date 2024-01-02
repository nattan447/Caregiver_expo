import { Text, View, TextInput } from "react-native";
import { EditProfileStyle } from "../../../datascreensCliente/homecliente/initialscreen/styles/editProfileStyle";
type propsInputEdit = {
  txt: string;
  placeholder: string;
  value: string | undefined;
  onchangeValue: () => void;
  isPassWord: boolean;
};
const InputConfig = (props: propsInputEdit) => {
  return (
    <View style={EditProfileStyle.inputView}>
      <Text style={EditProfileStyle.txt}>{props.txt}</Text>
      <TextInput
        secureTextEntry={props.isPassWord}
        value={props.value}
        placeholder={props.placeholder}
        style={EditProfileStyle.input}
      ></TextInput>
    </View>
  );
};

export { InputConfig };
