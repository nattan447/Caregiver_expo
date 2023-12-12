import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Autenticacaocli from "./components/authenticscreens/autenticacliente";
import Autenticacaocuid from "./components/authenticscreens/autenticacuid";
import Cadastrocuidador from "./components/datascreenscuid/cadastrocuid";
import Cadastrocuidador2 from "./components/datascreenscuid/cadastrocuid2";
import Cadastrocuidador3 from "./components/datascreenscuid/cadastrocuid3";
import { Header } from "react-native/Libraries/NewAppScreen";
import Homenavigator from "./components/homecuid/homenavigator";
export type RootStackParamList = {
  Autenticacaocli: undefined;
  Autenticacaocuid: undefined;
  Cadastrocuidador: undefined;
  Cadastrocuidador2: object;
  Cadastrocuidador3: object;
  Homenavigator: object;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Autenticacaocli">
        <Stack.Screen
          options={{ headerShown: false }}
          component={Autenticacaocli}
          name="Autenticacaocli"
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          component={Autenticacaocuid}
          name="Autenticacaocuid"
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
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
            headerShown: true,
            title: "",
            headerBackVisible: true,
            headerTintColor: "#C77B43",
            headerStyle: {
              backgroundColor: "#F8F8F8",
            },
          }}
          component={Homenavigator}
          name="Homenavigator"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
