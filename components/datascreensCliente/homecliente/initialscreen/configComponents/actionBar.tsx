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
import { ConfiguracaoStyle } from "../styles/configuracaostyle";

type propsActionBar = {
  iconUrl: number;
  txt: string;
  arrowUrl: number;
  onPress: () => void;
};
const ActionBarConfig = (props: propsActionBar) => {
  return (
    <TouchableOpacity style={ConfiguracaoStyle.options} onPress={props.onPress}>
      <View style={ConfiguracaoStyle.iconPlusTxt}>
        <Image source={props.iconUrl} style={{ height: 50, width: 50 }}></Image>
        <Text style={ConfiguracaoStyle.txtOptions}>{props.txt}</Text>
      </View>
      <Image source={props.arrowUrl} style={{ height: 40 }}></Image>
    </TouchableOpacity>
  );
};
export { ActionBarConfig };
