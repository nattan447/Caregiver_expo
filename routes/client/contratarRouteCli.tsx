import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { contratarRootParams } from "../../types/contratarRootParams";
import { ContratarClie } from "../../components/datascreensCliente/homecliente/contratacaoclie/contratar";
import { InfocontratoCli } from "../../components/datascreensCliente/homecliente/contratacaoclie/infocontrato";
import { PagamentoinfoCli } from "../../components/datascreensCliente/homecliente/contratacaoclie/pagamentoinfo";
import { PerfilContratado } from "../../components/datascreensCliente/homecliente/contratacaoclie/perfil";
import { Clientedatainterfc } from "../../components/interfacests/clienteInterface";
const Stack = createNativeStackNavigator<contratarRootParams>();
function ContratarRouteCli() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Contratar">
        <Stack.Screen
          options={{ headerShown: false }}
          component={ContratarClie}
          name="Contratar"
        ></Stack.Screen>
        <Stack.Screen
          options={styleHeader}
          component={PerfilContratado}
          name="perfil"
        ></Stack.Screen>

        <Stack.Screen
          options={styleHeader}
          component={InfocontratoCli}
          name="infocontrato"
        ></Stack.Screen>

        <Stack.Screen
          options={styleHeader}
          component={PagamentoinfoCli}
          name="pagamentoinfo"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { ContratarRouteCli };
const styleHeader = {
  headerShown: true,
  headerStyle: {
    backgroundColor: "#F8F8F8",
  },
  headerTitle: "",
};
