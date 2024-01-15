import React from "react";

import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

// import { ContratarRouteCli } from "./contratarRouteCli";

import { FavoritosCli } from "../../components/datascreensCliente/homecliente/favoritos";

import { Clientedatainterfc } from "../../components/interfacests/clienteInterface";

import { HomeTabParms } from "../../types/homeTabParams";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ProcessTopRouteCli } from "./proccessTopRouteCli";

import Homecliente from "../../components/datascreensCliente/homecliente/initialscreen/homeclie";

import { InitialScreenParamList } from "../../types/initialScreenType";

import { ContratarClie } from "../../components/datascreensCliente/homecliente/contratacaoclie/contratar";

type PropsTabHome = NativeStackScreenProps<InitialScreenParamList, "homeTab">;

const Tab = createBottomTabNavigator<HomeTabParms>();

const HomeTabRouteCli = ({ route }: PropsTabHome) => {
  return (
    <Tab.Navigator screenOptions={tabStyle as any}>
      <Tab.Screen
        name="homeCliente"
        component={Homecliente}
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
        component={ContratarClie}
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
            <Ionicons name="newspaper" size={focused ? 60 : 40} color="black" />
          ),
          ...tabScrenStyle,
        })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export { HomeTabRouteCli };

const tabStyle = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: "10%",
    backgroundColor: "#FFE7E7",
    margin: "2%",
    borderRadius: 7,
  },
  headerShown: false,
};

const tabScrenStyle = {
  headerShown: false,
  headerStyle: {
    backgroundColor: "#F8F8F8",
  },
};
