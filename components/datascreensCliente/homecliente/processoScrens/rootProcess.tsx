import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProcessRootParams } from "../../../../types/processRootParams";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { InProcess } from "./inProcess";
import { Pendent } from "./pendent";
import { Finished } from "./finished";
const Tab = createMaterialTopTabNavigator<ProcessRootParams>();
const RootProcess = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="pendent" component={Pendent}></Tab.Screen>
      <Tab.Screen name="inProcess" component={InProcess}></Tab.Screen>
      <Tab.Screen name="finished" component={Finished}></Tab.Screen>
    </Tab.Navigator>
  );
};
export { RootProcess };
