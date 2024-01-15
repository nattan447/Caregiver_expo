import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import homeloginscss from "../../../../estilos/homeloginscss";

import { Btn } from "../../../../desginscomponents/authenticheadrs";

import { CuidadorCard } from "../../../homecomponents/processComponents/pendentComps/cuidadorCard";

import { Cards } from "../../../homecomponents/processComponents/data/cards";

const Pendent = () => {
  return (
    <View style={pendentStyle.container}>
      <CuidadorCard
        queryData={Cards}
        onpresProposta={() => alert("ver proposta")}
      />
    </View>
  );
};

export { Pendent };

const pendentStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
