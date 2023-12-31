import { Text, View, TextInput } from "react-native";
import { EditProfileStyle } from "../../../datascreensCliente/homecliente/initialscreen/styles/editProfileStyle";

type propsInputEdit = {
  txt: string;
  placeholder: string;
  value: string | undefined;
  onchangeValue: () => void;
};
const InputConfig = (props: propsInputEdit) => {
  return (
    <View style={EditProfileStyle.inputView}>
      <Text style={EditProfileStyle.txt}>{props.txt}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={EditProfileStyle.input}
      ></TextInput>
    </View>
  );
};

export { InputConfig };
