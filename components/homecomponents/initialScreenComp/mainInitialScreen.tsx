import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import homesty from "../../homecuid/estiloscuid/homesty";
type propsMainInitialScreen = {
  profileImgId: number;
  userName: string;
  depPress: () => void;
};
const MainInitialScreen = (props: propsMainInitialScreen) => {
  return (
    <View style={homesty.main}>
      <Image
        source={props.profileImgId}
        style={{ height: 90, width: 90, borderRadius: 50 }}
      />
      <Text style={homesty.mainusername}>{props.userName}</Text>

      {/* esses TouchableOpacity serão componentes seprarados*/}
      <TouchableOpacity style={homesty.btnwicons}>
        <Image
          source={require("../../../assets/notifications.png")}
          style={{ height: 32, width: 32, right: "100%" }}
        />
        <Text style={homesty.btnwconstxt}>notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homesty.btnwicons} onPress={props.depPress}>
        <Image
          source={require("../../../assets/add.png")}
          style={{ height: 27, width: 27, right: "100%" }}
        />
        <Text style={homesty.btnwconstxt}>Dependente</Text>
      </TouchableOpacity>

      <View style={homesty.avaliacoes}>
        <Text style={homesty.avaliacoestxt}>Avaliações</Text>
        <View style={homesty.avaliacao}>
          <Image
            source={require("../../../assets/user.png")}
            style={{ height: 60, width: 60 }}
          />

          <Text style={{ left: 20 }}>gostei do app, nota 10!</Text>
        </View>
      </View>
    </View>
  );
};
export { MainInitialScreen };
