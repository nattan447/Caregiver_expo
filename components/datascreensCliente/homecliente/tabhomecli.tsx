import { View } from "react-native";
import React from "react";
import { Clientedatacontext } from "./datacontext/clitentedata";
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { RootInitialScreen } from "./initialscreen/rootInitial";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { RootProcess } from "./processoScrens/rootProcess";
import { Clientedatainterfc } from "../../interfacests/clienteInterface";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FavoritosCli } from "./favoritos";
import Processo from "./processocli";
import { ContratarnavigatorCli } from "./contratacaoclie/contratarnavigator";
import { HomeTabParms } from "../../../types/homeTabParams";
type PropsHomeFromAuthenticScreen = NativeStackScreenProps<
  AuthenticRootParamList,
  "roothomecliente"
>;
const TabhomeCli = ({ route }: PropsHomeFromAuthenticScreen) => {
  const Tab = createBottomTabNavigator<HomeTabParms>();
  const [clienteData, setClienteData] = useState<Clientedatainterfc>();
  useEffect(() => {
    if (route.params) {
      const clienteDataFromNav = route.params as Clientedatainterfc;
      if (clienteDataFromNav != undefined) {
        setClienteData(clienteDataFromNav);
      }
    }
  }, [route.params]);

  return (
    <View style={{ backgroundColor: "#F8F8F8", flex: 1 }}>
      <Clientedatacontext.Provider
        //não consigo resolver o problema de tipagem dessa variável
        value={
          { clienteData, setClienteData } as unknown as
            | Clientedatainterfc
            | undefined
        }
      >
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 90,
              backgroundColor: "#FFE7E7",
              margin: "5%",
              borderRadius: 7,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={RootInitialScreen}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name="home-variant"
                  size={focused ? 60 : 40}
                  color="black"
                />
              ),
              headerShown: false,
            })}
          ></Tab.Screen>
          <Tab.Screen
            name="Favoritos"
            component={FavoritosCli}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <AntDesign name="star" size={focused ? 60 : 40} color="black" />
              ),
              headerShown: false,
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            })}
          ></Tab.Screen>
          <Tab.Screen
            name="Contratar"
            component={ContratarnavigatorCli}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <FontAwesome5
                  name="hand-holding-heart"
                  size={focused ? 60 : 40}
                  color="black"
                />
              ),
              headerShown: false,
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            })}
          ></Tab.Screen>
          <Tab.Screen
            name="rootProcess"
            component={RootProcess}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="newspaper"
                  size={focused ? 60 : 40}
                  color="black"
                />
              ),
              headerShown: false,
              headerStyle: {
                backgroundColor: "#F8F8F8",
              },
            })}
          ></Tab.Screen>
        </Tab.Navigator>
      </Clientedatacontext.Provider>
    </View>
  );
};
export { TabhomeCli };
