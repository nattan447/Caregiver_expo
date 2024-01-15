import { Text, View, StyleSheet } from "react-native";

import homeloginscss from "../../../../estilos/homeloginscss";

import { Cards } from "../../../homecomponents/processComponents/data/cards";

import { CuidCardAndamento } from "../../../homecomponents/processComponents/andamentoComponents/CuidCardAndamento";

const InProcess = () => {
  return (
    <View style={InProcessStyle.container}>
      <CuidCardAndamento queryData={Cards} />
    </View>
  );
};
export { InProcess };

const InProcessStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
