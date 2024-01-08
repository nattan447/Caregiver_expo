import { Text, View, StyleSheet } from "react-native";

const ServiceDetails = () => {
  return (
    <View style={detailsStyle.container}>
      <Text>detalhes do serviço</Text>
    </View>
  );
};
export { ServiceDetails };
const detailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
