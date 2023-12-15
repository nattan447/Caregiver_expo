import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";
import { Header } from "react-native/Libraries/NewAppScreen";
import Contratar from "./contratar";
import Perfil from "./perfil";
import Infocontato from "./infocontrato";
import Pagamentoinfo from "./pagamentoinfo";
export type RootStackParamListContratar = {
  Contratar: undefined;
  perfil: Cuidadadordatainterfc | undefined;
  infocontato: Cuidadadordatainterfc | undefined;
  pagamentoinfo: Cuidadadordatainterfc | undefined;
};
const Stack = createNativeStackNavigator<RootStackParamListContratar>();
export default function Contratarnavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Contratar">
        <Stack.Screen
          options={{ headerShown: false }}
          component={Contratar}
          name="Contratar"
        ></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F8F8F8",
            },
            headerTitle: "",
          }}
          component={Perfil}
          name="perfil"
        ></Stack.Screen>

        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F8F8F8",
            },
            headerTitle: "",
          }}
          component={Infocontato}
          name="infocontato"
        ></Stack.Screen>

        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F8F8F8",
            },
            headerTitle: "",
          }}
          component={Pagamentoinfo}
          name="pagamentoinfo"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
