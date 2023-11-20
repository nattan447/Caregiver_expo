import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Homecuidador"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Homecdcuidador: React.FC = () => {
  const route = useRoute();
  const { nome } = route.params as { nome: string };
  return (
    <View style={homeloginscss.container}>
      <Text>{nome}</Text>
    </View>
  );
};
export default Homecdcuidador;
