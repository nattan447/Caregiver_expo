import { View, StyleSheet, Image, Text } from "react-native";

type PropsHeaderPerfil = {
  img: number;
  nome: string;
  cargo: string;
};

const HeaderPerfil = (props: PropsHeaderPerfil) => {
  return (
    <View style={perfilStyle.headerView}>
      <Image source={props.img} style={perfilStyle.img}></Image>
      <View style={perfilStyle.innerHeaderView}>
        <Text style={perfilStyle.nome}>{props.nome} </Text>
        <Text style={perfilStyle.cargo}>{props.cargo}</Text>
      </View>
    </View>
  );
};

export { HeaderPerfil };

const perfilStyle = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "100%",
    justifyContent: "space-around",
    height: "14%",
    marginTop: "8%",
    paddingTop: 10,
  },
  innerHeaderView: {
    // backgroundColor: "white",
    width: "50%",
    paddingTop: 20,
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  nome: {
    fontSize: 20,
    color: "#607D8B",
  },
  cargo: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    top: 10,
  },
});
