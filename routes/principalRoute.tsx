import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticRootParamList } from "../types/authenticRoot";
import Autenticacaocli from "../components/authenticscreens/autenticacliente";
import Entrarcliente from "../components/datascreensCliente/entrar/entrarclient";
import Autenticacaocuid from "../components/authenticscreens/autenticacuid";
import Cadastrocliente from "../components/datascreensCliente/cadasctrarCliente/cadastroclient";
import { ConfiguracaoCli } from "../components/datascreensCliente/homecliente/initialscreen/configuracao1";
import { HomeTabRouteCli } from "./client/homeTabRouteCli";
import Cadastrocuidador from "../components/datascreenscuid/cadastroCuidador/cadastrocuid";
import Cadastrocuidador2 from "../components/datascreenscuid/cadastroCuidador/cadastrocuid2";
import Cadastrocuidador3 from "../components/datascreenscuid/cadastroCuidador/cadastrocuid3";
import Entrarcuidador from "../components/datascreenscuid/entrada/entrarcuid";
import Homenavigator from "../components/homecuid/homenavigator";

const styleHeader = {
  title: "",
  headerTintColor: "#C77B43",
  headerStyle: {
    backgroundColor: "#F8F8F8",
  },
};

const Stack = createNativeStackNavigator<AuthenticRootParamList>();
const PrincipalRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Autenticacaocli">
      <Stack.Screen
        options={{ headerShown: false }}
        component={Autenticacaocli}
        name="Autenticacaocli"
      ></Stack.Screen>
      <Stack.Screen
        options={{
          ...styleHeader,
          headerShown: false,
        }}
        component={Entrarcliente}
        name="entrarcliente"
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        component={Autenticacaocuid}
        name="Autenticacaocuid"
      ></Stack.Screen>

      <Stack.Screen
        options={{ headerShown: false }}
        component={Entrarcuidador}
        name="entrarcuidador"
      ></Stack.Screen>
      <Stack.Screen
        options={{ ...styleHeader, headerShown: true }}
        component={Cadastrocuidador}
        name="Cadastrocuidador"
      ></Stack.Screen>
      <Stack.Screen
        options={{ ...styleHeader, headerShown: true }}
        component={Cadastrocuidador2}
        name="Cadastrocuidador2"
      ></Stack.Screen>

      <Stack.Screen
        options={{ ...styleHeader, headerShown: true }}
        component={Cadastrocuidador3}
        name="Cadastrocuidador3"
      ></Stack.Screen>
      <Stack.Screen
        options={{ ...styleHeader, headerShown: false }}
        component={Homenavigator}
        name="Homenavigator"
      ></Stack.Screen>

      <Stack.Screen
        options={{ ...styleHeader, headerShown: true }}
        component={Cadastrocliente}
        name="cadastrocliente"
      ></Stack.Screen>

      <Stack.Screen
        options={{ ...styleHeader, headerShown: false }}
        component={HomeTabRouteCli}
        name="roothomecliente"
      ></Stack.Screen>

      <Stack.Screen
        options={{ ...styleHeader, headerShown: false }}
        component={ConfiguracaoCli}
        name="configuracao"
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export { PrincipalRoute };
