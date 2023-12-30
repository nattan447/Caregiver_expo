import { StyleSheet } from "react-native";
const ConfiguracaoStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#607D8B",
  },
  header: {
    width: "100%",
    height: "55%",
    justifyContent: "center",
    alignItems: "center",
  },
  headertxt1: {
    color: "#C77B43",
    fontSize: 24,
  },

  headerimg: { height: 100, width: 100, marginTop: 15 },
  headertxt2: { fontSize: 20, marginTop: 10 },
  headertxt3: { fontSize: 16, marginTop: 10 },
  main: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    height: "60%",

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  options: {
    borderColor: "black",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: "8%",
    width: "88%",
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0.4,
  },
  iconPlusTxt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "46%",
  },
  txtOptions: {
    fontSize: 16,
  },
});
export { ConfiguracaoStyle };
