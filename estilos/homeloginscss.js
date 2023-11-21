import { StyleSheet, Text, View } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
  },
  header: {
    height: "44%",
    width: "100%",
    backgroundColor: "F8F8F8",
  },

  headertxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 223,
    alignSelf: "center",
  },
  img: {
    height: "100%",
    width: "150%",
    position: "absolute",
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
  },

  blocoprincipal: {
    position: "relative",
    width: "100%",
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderColor: "lightblue",
    alignItems: "center",
    marginTop: "2%",
  },
  blocoprincipaltxt: {
    position: "absolute",
    color: "#C77B43",
    fontWeight: "bold",
    fontSize: 40,
  },
  blocoprincipaltxt2: {
    position: "absolute",
    color: "#C77B43",
    fontWeight: "bold",
    fontSize: 24,
    top: "20%",
  },
  blocoprincipaltxt3: {
    color: "#C77B43",
    position: "absolute",
    fontSize: 15,
    top: "35%",
    width: 201,
  },
});
