import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { RootStackParamList } from "../../App";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Homecliente"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Homecdcliente: React.FC<Props> = ({ navigation }) => {
  const irpaginacuidador = (): void => {
    navigation.navigate("Homecuidador", { nome: "nattan" });
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={homeloginscss.header}>
        <Image
          source={require("../../assets/img1.png")}
          style={homeloginscss.img}
        ></Image>

        <Image
          source={require("../../assets/arrowhead.png")}
          style={{ position: "relative", alignSelf: "flex-end", top: "60%" }}
        ></Image>

        {/* <Button
          title="ir para a outra página"
          onPress={irpaginacuidador}
        ></Button> */}

        <Text style={homeloginscss.headertxt}>SEJA UM CUIDADOR</Text>
      </View>
      <View style={homeloginscss.blocoprincipal}>
        <Text>bloco principla</Text>
      </View>
    </SafeAreaView>
  );
};
export default Homecdcliente;
