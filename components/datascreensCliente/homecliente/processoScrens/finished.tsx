import { Text, View, Button } from "react-native";
import homeloginscss from "../../../../estilos/homeloginscss";
import { AuthenticRootParamList } from "../../../../types/authenticRoot";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProcessRootParams } from "../../../../types/processRootParams";
type propsFromTopNavigator = NativeStackScreenProps<
  ProcessRootParams,
  "finished"
>;
type propsFromAuthenticScreen = NativeStackScreenProps<
  AuthenticRootParamList,
  "roothomecliente"
>;
const Finished = ({ navigation }: propsFromTopNavigator) => {
  return (
    <View style={homeloginscss.blocoprincipal}>
      <Text>terminados</Text>
      <Button title="verdetalhe"></Button>
    </View>
  );
};
export { Finished };
