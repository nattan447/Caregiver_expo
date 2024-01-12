import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import React, { useState } from "react";

type dataQueryProps = {
  name: string;
  picture: number;
  service: string;
  time: number;
  id: string;
};

type PropsNotification = {
  queryData: dataQueryProps[];
};

const NotificationComp = (props: PropsNotification) => {
  const [notifications, setNotifications] = useState(props.queryData);

  function removeNotification(Id: string) {
    const notificationRemoved = notifications.filter(
      (notification) => notification.id != Id
    );

    setNotifications(notificationRemoved);
  }

  function renderData(data: dataQueryProps) {
    return (
      <View style={notificationStyle.notifiView}>
        <View style={notificationStyle.notifiLeftSide}>
          <Image
            source={require("../../../../assets/redcircle.png")}
            style={notificationStyle.recCircle}
          />

          <Image
            source={data.picture}
            style={notificationStyle.personPicture}
          />
          <View style={notificationStyle.notifiDetails}>
            <Text style={notificationStyle.detailsName}>{data.name}</Text>
            <Text style={notificationStyle.detailsTime}>
              {data.time} hrs atrás
            </Text>
            <Text style={notificationStyle.detailsService}>{data.service}</Text>
          </View>
          <TouchableOpacity onPress={() => removeNotification(data.id)}>
            <View style={notificationStyle.redImgRightSide}>
              <Image
                source={require("../../../../assets/x.png")}
                style={notificationStyle.xImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <>
      <FlatList
        style={{ width: "100%" }}
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderData(item)}
      ></FlatList>
    </>
  );
};
export { NotificationComp };

const notificationStyle = StyleSheet.create({
  notifiView: {
    width: "100%",
    height: 120,
    justifyContent: "center",
    marginTop: "10%",
    borderBottomWidth: 0.6,
    borderColor: "black",
  },
  notifiDetails: {
    flexDirection: "column",
    // backgroundColor: "red",
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
    fontSize: 10,
  },
  notifiLeftSide: {
    height: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    // backgroundColor: "palevioletred",
  },
  redImgRightSide: {
    height: "100%",
    // backgroundColor: "maroon",
    justifyContent: "center",
  },
  personPicture: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: "center",
    marginHorizontal: "2%",
  },
  recCircle: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
  xImage: {
    width: 30,
    height: 30,
  },
});
