import { Text, View, StyleSheet, Image } from "react-native";

type PropsHeaderCard = {
  img: number;
  typeService: string;
  status: string;
  prestador: string;
};

const HeaderCard = (props: PropsHeaderCard) => {
  return (
    <>
      <Image
        source={require("../../../../assets/modelFace.jpg")}
        style={HeaderCardStyle.img}
      ></Image>
      <Text style={HeaderCardStyle.txt}>
        tipo de serviço :{props.typeService}
      </Text>
      <Text style={HeaderCardStyle.txt}>status : {props.status}</Text>
      <Text style={HeaderCardStyle.txt}>prestador: {props.prestador}</Text>
    </>
  );
};
export { HeaderCard };

const HeaderCardStyle = StyleSheet.create({
  img: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  txt: {
    marginTop: 27,
  },
});
