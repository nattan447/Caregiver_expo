import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Finished } from "../../components/datascreensCliente/homecliente/processoScrens/finished";

import { InProcess } from "../../components/datascreensCliente/homecliente/processoScrens/inProcess";

import { Pendent } from "../../components/datascreensCliente/homecliente/processoScrens/pendent";

import { ProcessRootParams } from "../../types/processRootParams";

import { InitialScreenRouteCli } from "./InitialScreenRouteClie";

import { InitialScreenParamList } from "../../types/initialScreenType";

const Tab = createMaterialTopTabNavigator<InitialScreenParamList>();

const ProcessTopRouteCli = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="pendent" component={Pendent}></Tab.Screen>

      <Tab.Screen name="inProcess" component={InProcess}></Tab.Screen>

      <Tab.Screen name="finished" component={Finished}></Tab.Screen>
    </Tab.Navigator>
  );
};
export { ProcessTopRouteCli };
