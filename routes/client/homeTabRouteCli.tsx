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
import { Clientedatacontext } from "../../components/datascreensCliente/homecliente/datacontext/clitentedata";
import { RootInitialScreen } from "../../components/datascreensCliente/homecliente/initialscreen/rootInitial";
import { AuthenticRootParamList } from "../../types/authenticRoot";
import { ProcessTopRouteCli } from "./proccessTopRouteCli";
type PropsHomeFromAuthenticScreen = NativeStackScreenProps<
  AuthenticRootParamList,
  "roothomecliente"
>;
const HomeTabRouteCli = ({ route }: PropsHomeFromAuthenticScreen) => {
  const Tab = createBottomTabNavigator<HomeTabParms>();
  const [clienteData, setClienteData] = useState<Clientedatainterfc>();
  useEffect(() => {
    if (route.params) {
      const clienteDataFromNav = route.params as Clientedatainterfc;
      if (clienteDataFromNav != undefined) setClienteData(clienteDataFromNav);
    }
  }, [route.params]);
  return (
    <View style={{ backgroundColor: "#F8F8F8", flex: 1 }}>
      <Clientedatacontext.Provider
        //não consigo resolver o problema de tipagem dessa variável
        value={{ clienteData, setClienteData } as unknown as Clientedatainterfc}
      >
        <Tab.Navigator initialRouteName="Home" screenOptions={tabStyle as any}>
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
      </Clientedatacontext.Provider>
    </View>
  );
};
export { HomeTabRouteCli };
//estilos
const tabStyle = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 90,
    backgroundColor: "#FFE7E7",
    margin: "5%",
    borderRadius: 7,
  },
};
const tabScrenStyle = {
  headerShown: false,
  headerStyle: {
    backgroundColor: "#F8F8F8",
  },
};
