import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { InitialScreenParamList } from "../../../../types/initialScreenType";
import { ConfiguracaoCli } from "./configuracao1";
import { ConfigPerfilCli } from "./configPerfilCli";
import Homecliente from "./homeclie";
const Stack = createNativeStackNavigator<InitialScreenParamList>();
const RootInitialScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homecliente"
        component={Homecliente}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="configuracaoCli"
        component={ConfiguracaoCli}
        options={{
          headerShown: false,
          title: "",
          headerTintColor: "#C77B43",
          headerStyle: {
            backgroundColor: "#607D8B",
          },
        }}
      />
      <Stack.Screen
        name="configPerfil"
        component={ConfigPerfilCli}
        options={{
          headerShown: true,
          title: "",
          headerTintColor: "#C77B43",
          headerStyle: {
            backgroundColor: "#F8F8F8",
          },
        }}
      />
    </Stack.Navigator>
  );
};
export { RootInitialScreen };
