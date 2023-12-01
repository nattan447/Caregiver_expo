import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homecdcliente from "./components/authenticscreens/homecdcliente";
import Homecdcuidador from "./components/authenticscreens/homecdcuidador";
import Cadastrocuidador from "./components/datascreens/cadastrocuid";
import Cadastrocuidador2 from "./components/datascreens/cadastrocuid2";
import { Header } from "react-native/Libraries/NewAppScreen";
export type RootStackParamList = {
  Homecliente: undefined;
  Homecuidador: undefined;
  Cadastrocuidador: undefined;
  Cadastrocuidador2: object;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homecliente">
        <Stack.Screen
          options={{ headerShown: false }}
          component={Homecdcliente}
          name="Homecliente"
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          component={Homecdcuidador}
          name="Homecuidador"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
