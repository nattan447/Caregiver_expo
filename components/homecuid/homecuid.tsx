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

import { Authenticheadrs } from "../../desginscomponents/authenticheadrs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../App";
import { Btn } from "../../desginscomponents/authenticheadrs";
import homeloginscss from "../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import homesty from "./estiloscuid/homesty";
import React from "react";

const Homecuid = () => {
  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={homesty.header}>
        <Text style={homesty.headertxt}>Caregiver</Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/gear.png")}
            style={{
              left: "150%",
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={homesty.main}>
        <Image
          source={require("../../assets/user.png")}
          style={{ height: 90, width: 90 }}
        />
        <Text style={homesty.mainusername}>Nattan ferreira</Text>

        <TouchableOpacity style={homesty.btnwicons}>
          <Image
            source={require("../../assets/notifications.png")}
            style={{ height: 32, width: 32, right: "100%" }}
          />
          <Text style={homesty.btnwconstxt}>notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homesty.btnwicons}>
          <Image
            source={require("../../assets/add.png")}
            style={{ height: 27, width: 27, right: "100%" }}
          />
          <Text style={homesty.btnwconstxt}>Dependente</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Homecuid;
