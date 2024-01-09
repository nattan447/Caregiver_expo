import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const NotificationCli = () => {
  return (
    <View style={notificationsStyle.container}>
      <Text>nofications here!</Text>
      {/*essa notificacoes irão ser componentes separados*/}
      <View style={notificationsStyle.notifiView}>
        <View style={notificationsStyle.notifiLeftSide}>
          <Image
            source={require("../../../../../assets/redcircle.png")}
            style={{ height: 20, width: 20, alignSelf: "center" }}
          />

          <Image
            source={require("../../../../../assets/modelFace.jpg")}
            style={{
              height: 90,
              width: 90,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
          <View style={notificationsStyle.notifiDetails}>
            <Text style={notificationsStyle.detailsName}>João Marcos</Text>
            <Text style={notificationsStyle.detailsTime}>2hrs atrás</Text>
            <Text style={notificationsStyle.detailsService}>
              Solicitação de serviço Cuidador de Pcd’s
            </Text>
          </View>
          <View style={notificationsStyle.redImgRightSide}>
            <Image
              source={require("../../../../../assets/x.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export { NotificationCli };

const notificationsStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  notifiView: {
    width: "100%",
    backgroundColor: "gray",
    height: "20%",
    justifyContent: "center",
    marginTop: 30,
  },
  notifiDetails: {
    flexDirection: "column",
    backgroundColor: "red",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsName: {
    color: "#007EB5",
    fontSize: 16,
  },
  detailsTime: {
    fontSize: 13,
    color: "gray",
  },
  detailsService: {
    fontSize: 13,
  },
  notifiLeftSide: {
    height: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "palevioletred",
  },
  redImgRightSide: {
    height: "100%",
    backgroundColor: "maroon",
    justifyContent: "center",
  },
});
