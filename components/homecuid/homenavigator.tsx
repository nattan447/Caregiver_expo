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
import { useState } from "react";
import Homecuid from "./homecuid";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import React from "react";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Homenavigator"
>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Homenavigator: React.FC<Props> = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
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
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Favoritos"
        component={Homecuid}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <AntDesign name="star" size={focused ? 60 : 40} color="black" />
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Contratar"
        component={Homecuid}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="hand-holding-heart"
              size={focused ? 60 : 40}
              color="black"
            />
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Histórico"
        component={Homecuid}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons name="newspaper" size={focused ? 60 : 40} color="black" />
          ),
        })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
export default Homenavigator;
