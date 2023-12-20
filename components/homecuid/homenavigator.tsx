import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Caredatacontext from "./usercontext/caredata";
import { useState, useEffect, useRef } from "react";
import Homecuid from "./homecuid";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthenticRootParamList } from "../../types/authenticRoot";
import homeloginscss from "../../estilos/homeloginscss";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Cuidadadordatainterfc } from "../interfacests/cuidadordata";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Favoritos from "./favoritos";
import Contratar from "./contratacao/contratar";
import Contratarnavigator from "./contratacao/contratarnavigator";
import Processo from "./processo";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import React from "react";
type HomeScreenNavigationParams = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Homenavigator"
>;
type PropsHome = {
  navigation: HomeScreenNavigationParams;
  route: RouteProp<AuthenticRootParamList, "Homenavigator">;
};
export type RootTabParamList = {
  Home: object;
  Favoritos: object;
  Contratar: object;
  processo: object;
};

const Homenavigator: React.FC<PropsHome> = ({ route }) => {
  const Tab = createBottomTabNavigator<RootTabParamList>();
  const [cuidadordataState, SetCuidadordata] =
    useState<Cuidadadordatainterfc>();
  useEffect(() => {
    if (route.params) {
      var cuidadordata = route.params;
      if (cuidadordata != undefined) {
        SetCuidadordata(cuidadordata);
      }
    }
  }, []);
  return (
    <View style={{ backgroundColor: "#F8F8F8", flex: 1 }}>
      <Caredatacontext.Provider value={cuidadordataState}>
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
            component={Homecuid}
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
            component={Favoritos}
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
            component={Contratarnavigator}
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
            name="processo"
            component={Processo}
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
      </Caredatacontext.Provider>
    </View>
  );
};
export default Homenavigator;
