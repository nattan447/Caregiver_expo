import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Clientedatacontext } from "../../../datascreensCliente/homecliente/datacontext/clitentedata";
import { ConfiguracaoStyle } from "../../../datascreensCliente/homecliente/initialscreen/styles/configuracaostyle";
import { useState, useContext, useEffect } from "react";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
type propsHeader = {
  profileImageUrl: number;
  userName: string;
  profession: string;
};
const HeaderConfig = (props: propsHeader) => {
  const { clienteData, setClienteData }: any = useContext(Clientedatacontext);
  const [dataTyped, setDataTyped] = useState<Clientedatainterfc>(clienteData);
  const changeImage = async () => {
    let Image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(Image);
    if (!Image.canceled) {
      setDataTyped({
        nome: dataTyped.nome,
        sobrenome: dataTyped.sobrenome,
        email: dataTyped.email,
        senha: dataTyped.senha,
        cpf: dataTyped.cpf,
        profileimg: Image.assets[0].uri,
        Estado: dataTyped.Estado,
        cidade: dataTyped.cidade,
      });
    }
  };
  useEffect(() => {
    setClienteData(dataTyped);
  }, [dataTyped]);
  return (
    <View style={ConfiguracaoStyle.header}>
      <Text style={ConfiguracaoStyle.headertxt1}>Perfil de usuario</Text>
      <TouchableOpacity onPress={changeImage}>
        <Image
          source={props.profileImageUrl}
          style={ConfiguracaoStyle.headerimg}
        ></Image>
      </TouchableOpacity>
      <Text style={ConfiguracaoStyle.headertxt2}>{props.userName}</Text>
      <Text style={ConfiguracaoStyle.headertxt3}>{props.profession}</Text>
    </View>
  );
};
export { HeaderConfig };
