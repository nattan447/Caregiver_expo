import { View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ContratarRouteCli } from "./contratarRouteCli";
import { FavoritosCli } from "../../components/datascreensCliente/homecliente/favoritos";
import { Clientedatainterfc } from "../../components/interfacests/clienteInterface";
import { HomeTabParms } from "../../types/homeTabParams";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthenticRootParamList } from "../../types/authenticRoot";
import { ProcessTopRouteCli } from "./proccessTopRouteCli";
import { InitialScreenRouteCli } from "./InitialScreenRouteClie";
import { Clientedatacontext } from "../../components/datascreensCliente/homecliente/datacontext/clitentedata";
import { DepDataInterface } from "../../components/interfacests/depDataInterface";
import { DepDataContextCli } from "../../components/datascreensCliente/homecliente/datacontext/depDataContext";
type PropsHomeFromAuthenticScreen = NativeStackScreenProps<
  AuthenticRootParamList,
  "roothomecliente"
>;
const Tab = createBottomTabNavigator<HomeTabParms>();
const HomeTabRouteCli = ({ route }: PropsHomeFromAuthenticScreen) => {
  const [clienteData, setClienteData] = useState<Clientedatainterfc>();
  const [depDataContext, setDepDataContext] = useState<DepDataInterface>();

  useEffect(() => {
    if (route.params) {
      const clienteDataFromNav = route.params as Clientedatainterfc;
      if (clienteDataFromNav != undefined) setClienteData(clienteDataFromNav);
    }
  }, [route.params]);
  return (
    <Clientedatacontext.Provider
      value={{ clienteData, setClienteData } as unknown as Clientedatainterfc}
    >
      <DepDataContextCli.Provider
        value={
          { depDataContext, setDepDataContext } as unknown as DepDataInterface
        }
      >
        <Tab.Navigator screenOptions={tabStyle as any}>
          <Tab.Screen
            name="Home"
            component={InitialScreenRouteCli}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name="home-variant"
                  size={focused ? 60 : 40}
                  color="black"
                />
              ),
              ...tabScrenStyle,
            })}
          ></Tab.Screen>
          <Tab.Screen
            name="Favoritos"
            component={FavoritosCli}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <AntDesign name="star" size={focused ? 60 : 40} color="black" />
              ),
              ...tabScrenStyle,
            })}
          ></Tab.Screen>
          <Tab.Screen
            name="Contratar"
            component={ContratarRouteCli}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <FontAwesome5
                  name="hand-holding-heart"
                  size={focused ? 60 : 40}
                  color="black"
                />
              ),
              ...tabScrenStyle,
            })}
          ></Tab.Screen>
          <Tab.Screen
            name="rootProcess"
            component={ProcessTopRouteCli}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="newspaper"
                  size={focused ? 60 : 40}
                  color="black"
                />
              ),
              ...tabScrenStyle,
            })}
          ></Tab.Screen>
        </Tab.Navigator>
      </DepDataContextCli.Provider>
    </Clientedatacontext.Provider>
  );
};
export { HomeTabRouteCli };
//estilos
const tabStyle = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: "10%",
    backgroundColor: "#FFE7E7",
    margin: "2%",
    borderRadius: 7,
  },
};
const tabScrenStyle = {
  headerShown: false,
  headerStyle: {
    backgroundColor: "#F8F8F8",
  },
};
