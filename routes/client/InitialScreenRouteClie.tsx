import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ConfigPerfilCli } from "../../components/datascreensCliente/homecliente/initialscreen/configPerfilCli";
import { ConfiguracaoCli } from "../../components/datascreensCliente/homecliente/initialscreen/configuracao1";
import { AddDependentCli } from "../../components/datascreensCliente/homecliente/initialscreen/dependente/addDepCli";
import Homecliente from "../../components/datascreensCliente/homecliente/initialscreen/homeclie";
import { InitialScreenParamList } from "../../types/initialScreenType";

const Stack = createNativeStackNavigator<InitialScreenParamList>();
const InitialScreenRouteCli = () => {
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
        options={headerStyle2}
      />
      <Stack.Screen
        name="configPerfil"
        component={ConfigPerfilCli}
        options={headerStyle1}
      />
      <Stack.Screen
        name="addDepCli"
        component={AddDependentCli}
        options={{ ...headerStyle2, headerShown: true }}
      />
    </Stack.Navigator>
  );
};
export { InitialScreenRouteCli };

const headerStyle1 = {
  headerShown: true,
  title: "",
  headerTintColor: "#C77B43",
  headerStyle: {
    backgroundColor: "#F8F8F8",
  },
};
const headerStyle2 = {
  headerShown: false,
  title: "",
  headerStyle: {
    backgroundColor: "#607D8B",
  },
};
