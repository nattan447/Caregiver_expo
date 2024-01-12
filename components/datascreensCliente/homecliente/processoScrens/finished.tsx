import { Text, View, Button } from "react-native";
import homeloginscss from "../../../../estilos/homeloginscss";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProcessRootParams } from "../../../../types/processRootParams";
import { InitialScreenParamList } from "../../../../types/initialScreenType";
type PropsFinished = NativeStackScreenProps<InitialScreenParamList, "finished">;
const Finished = ({ navigation }: PropsFinished) => {
  return (
    <View style={homeloginscss.blocoprincipal}>
      <Text>terminados</Text>
      <Button
        title="verdetalhe"
        onPress={() => navigation.navigate("serviceDetails")}
      ></Button>
    </View>
  );
};
export { Finished };
