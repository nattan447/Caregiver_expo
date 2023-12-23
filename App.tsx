import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entrarcuidador from "./components/datascreenscuid/entrada/entrarcuid";
import Entrarcliente from "./components/datascreensCliente/entrar/entrarclient";
import Autenticacaocli from "./components/authenticscreens/autenticacliente";
import Autenticacaocuid from "./components/authenticscreens/autenticacuid";
import Cadastrocuidador from "./components/datascreenscuid/cadastroCuidador/cadastrocuid";
import Cadastrocuidador2 from "./components/datascreenscuid/cadastroCuidador/cadastrocuid2";
import Cadastrocuidador3 from "./components/datascreenscuid/cadastroCuidador/cadastrocuid3";
import Cadastrocliente from "./components/datascreensCliente/cadasctrarCliente/cadastroclient";
import { Header } from "react-native/Libraries/NewAppScreen";
import Homenavigator from "./components/homecuid/homenavigator";
import { AuthenticRootParamList } from "./types/authenticRoot";
import Splashscreen from "./splash/splashscreen";
import { useEffect, useState } from "react";
const Stack = createNativeStackNavigator<AuthenticRootParamList>();
export default function App() {
  const [isvideoOver, setisvideoOver] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisvideoOver(true);
    }, 9000);
  }, []);

  return (
    <NavigationContainer>
      {isvideoOver ? (
        <Stack.Navigator initialRouteName="Autenticacaocli">
          <Stack.Screen
            options={{ headerShown: false }}
            component={Autenticacaocli}
            name="Autenticacaocli"
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
              title: "",
              headerBackVisible: false,
              headerTintColor: "#C77B43",
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
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
            options={{
              headerShown: true,
              title: "",
              headerBackVisible: true,
              headerTintColor: "#C77B43",
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            }}
            component={Cadastrocuidador}
            name="Cadastrocuidador"
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: true,
              title: "",
              headerBackVisible: true,
              headerTintColor: "#C77B43",
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            }}
            component={Cadastrocuidador2}
            name="Cadastrocuidador2"
          ></Stack.Screen>

          <Stack.Screen
            options={{
              headerShown: true,
              title: "",
              headerBackVisible: true,
              headerTintColor: "#C77B43",
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            }}
            component={Cadastrocuidador3}
            name="Cadastrocuidador3"
          ></Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
              title: "",
              headerBackVisible: false,
              headerTintColor: "#C77B43",
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            }}
            component={Homenavigator}
            name="Homenavigator"
          ></Stack.Screen>

          <Stack.Screen
            options={{
              headerShown: true,
              title: "",
              headerTintColor: "#C77B43",
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            }}
            component={Cadastrocliente}
            name="cadastrocliente"
          ></Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Splashscreen />
      )}
    </NavigationContainer>
  );
}
