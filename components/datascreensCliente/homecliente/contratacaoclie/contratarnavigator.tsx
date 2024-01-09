// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
// import { PerfilContratado } from "./perfil";
// import { Header } from "react-native/Libraries/NewAppScreen";
// import { ContratarClie } from "./contratar";
// import { InfocontratoCli } from "./infocontrato";
// import { PagamentoinfoCli } from "./pagamentoinfo";
// export type RootStackParamListContratar = {
//   Contratar: undefined;
//   perfil: Clientedatainterfc | undefined;
//   infocontato: Clientedatainterfc | undefined;
//   pagamentoinfo: Clientedatainterfc | undefined;
// };
// const Stack = createNativeStackNavigator<RootStackParamListContratar>();
// function ContratarnavigatorCli() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="Contratar">
//         <Stack.Screen
//           options={{ headerShown: false }}
//           component={ContratarClie}
//           name="Contratar"
//         ></Stack.Screen>
//         <Stack.Screen
//           options={{
//             headerShown: true,
//             headerStyle: {
//               backgroundColor: "#F8F8F8",
//             },
//             headerTitle: "",
//           }}
//           component={PerfilContratado}
//           name="perfil"
//         ></Stack.Screen>

//         <Stack.Screen
//           options={{
//             headerShown: true,
//             headerStyle: {
//               backgroundColor: "#F8F8F8",
//             },
//             headerTitle: "",
//           }}
//           component={InfocontratoCli}
//           name="infocontato"
//         ></Stack.Screen>

//         <Stack.Screen
//           options={{
//             headerShown: true,
//             headerStyle: {
//               backgroundColor: "#F8F8F8",
//             },
//             headerTitle: "",
//           }}
//           component={PagamentoinfoCli}
//           name="pagamentoinfo"
//         ></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export { ContratarnavigatorCli };
