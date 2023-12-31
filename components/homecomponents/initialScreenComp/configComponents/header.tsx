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
import { ConfiguracaoStyle } from "../../../datascreensCliente/homecliente/initialscreen/styles/configuracaostyle";
type propsHeader = {
  profileImageUrl: number;
  userName: string;
  profession: string;
};
const HeaderConfig = (props: propsHeader) => {
  return (
    <View style={ConfiguracaoStyle.header}>
      <Text style={ConfiguracaoStyle.headertxt1}>Perfil de usuario</Text>
      <Image
        source={props.profileImageUrl}
        style={ConfiguracaoStyle.headerimg}
      ></Image>
      <Text style={ConfiguracaoStyle.headertxt2}>{props.userName}</Text>
      <Text style={ConfiguracaoStyle.headertxt3}>{props.profession}</Text>
    </View>
  );
};
export { HeaderConfig };
