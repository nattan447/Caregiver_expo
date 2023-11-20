import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homecdcliente from "./components/authenticscreens/homecdcliente";
import Homecdcuidador from "./components/authenticscreens/homecdcuidador";
import { Header } from "react-native/Libraries/NewAppScreen";
export type RootStackParamList = {
  Homecliente: undefined;
  Homecuidador: { nome: string };
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
          component={Homecdcuidador}
          name="Homecuidador"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
