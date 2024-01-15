import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Finished } from "../../components/datascreensCliente/homecliente/processoScrens/finished";

import { InProcess } from "../../components/datascreensCliente/homecliente/processoScrens/inProcess";

import { Pendent } from "../../components/datascreensCliente/homecliente/processoScrens/pendent";

import { ProcessRootParams } from "../../types/processRootParams";

import { InitialScreenRouteCli } from "./InitialScreenRouteClie";

import { InitialScreenParamList } from "../../types/initialScreenType";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Tab = createMaterialTopTabNavigator<InitialScreenParamList>();

const ProcessTopRouteCli = () => {
  return (
    <Tab.Navigator screenOptions={tabBarStyle}>
      <Tab.Screen
        name="pendent"
        options={{
          title: "pendentes",
        }}
        component={Pendent}
      ></Tab.Screen>

      <Tab.Screen
        name="inProcess"
        options={{
          title: "andamento",
        }}
        component={InProcess}
      ></Tab.Screen>

      <Tab.Screen
        name="finished"
        options={{ title: "concluidos" }}
        component={Finished}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export { ProcessTopRouteCli };

const tabBarStyle = {
  tabBarStyle: {
    margin: 10,
    borderRadius: 10,
  },
  tabBarIndicatorStyle: {
    backgroundColor: "#E64A19",
  },
  tabBarLabelStyle: {
    fontSize: 10,
  },
  tabBarInactiveTintColor: "gray",
  tabBarActiveTintColor: "#D8A683",
};
