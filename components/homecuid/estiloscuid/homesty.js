import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  header: {
    marginTop: "10%",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headertxt: {
    color: "#C77B43",
    fontSize: 30,
    fontWeight: "bold",
  },
  main: {
    marginTop: "7%",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  mainusername: {
    fontSize: 24,
    color: "#C77B43",
  },
  btnwicons: {
    marginTop: "8%",
    flexDirection: "row",
    backgroundColor: "#F1EBEB",
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  btnwconstxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#C77B43",
    right: "20%",
  },
  avaliacoes: {
    marginTop: "14%",
    alignItems: "center",
    width: "100%",
  },
  avaliacoestxt: {
    fontSize: 16,
    color: "#C77B43",
  },
  avaliacao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1EBEB",
    marginTop: "10%",
    width: "70%",
    borderRadius: 10,
    height: "32%",
  },
});
