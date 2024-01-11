import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import homesty from "../../homecuid/estiloscuid/homesty";
import { styles } from "../../../desginscomponents/inputs";
type propsHeader = {
  configBtnAct: () => void;
};
const HeaderInitial = (props: propsHeader) => {
  return (
    <View style={homesty.header}>
      <Text style={homesty.headertxt}>Caregiver</Text>
      <TouchableOpacity
        style={headerstyle.BtnView}
        onPress={props.configBtnAct}
      >
        <Image
          source={require("../../../assets/gear.png")}
          style={headerstyle.configBtn}
        />
      </TouchableOpacity>
    </View>
  );
};
export { HeaderInitial };

const headerstyle = StyleSheet.create({
  configBtn: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  BtnView: {
    left: "190%",
    height: "100%",
  },
});
