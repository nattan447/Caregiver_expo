import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { dataQueryNotification } from "../../../../homecomponents/initialScreenComp/notificationComp/notificationData";
import { NotificationComp } from "../../../../homecomponents/initialScreenComp/notificationComp/notification";
const NotificationCli = () => {
  return (
    <SafeAreaView style={notificationsStyle.container}>
      {/* <Text style={notificationsStyle.headerTxt}>notificações</Text> */}
      <NotificationComp queryData={dataQueryNotification} />
    </SafeAreaView>
  );
};

export { NotificationCli };

const notificationsStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  headerTxt: {
    color: "#C77B43",
    fontSize: 27,
    marginTop: "6%",
  },
});
