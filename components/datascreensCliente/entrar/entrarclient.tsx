import { StatusBar } from "expo-status-bar";

import { View, SafeAreaView, ScrollView } from "react-native";

import { useEffect, useState } from "react";

import { Authenticheadrs } from "../../../desginscomponents/authenticheadrs";

import { AuthenticRootParamList } from "../../../types/authenticRoot";

import { Btn } from "../../../desginscomponents/authenticheadrs";

import homeloginscss from "../../../estilos/homeloginscss";

import Inputs from "../../../desginscomponents/inputs";

import { Clientedatainterfc } from "../../interfacests/clienteInterface";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";

import React from "react";
import { VideoExportPreset } from "expo-image-picker";

type PropsEntrarCliente = NativeStackScreenProps<
  AuthenticRootParamList,
  "entrarcliente"
>;

export type PickedCli = Pick<Clientedatainterfc, "nome" | "email" | "senha">;

const Entrarcliente = ({ navigation }: PropsEntrarCliente) => {
  const [allUsers, setAllUsers] = useState<PickedCli[]>();

  const [email, Setemail] = useState<string>("");

  const [senha, Setsenha] = useState<string>("");

  const handleEmail = (Email: string): void => Setemail(Email);

  const handleSenha = (Senha: string): void => Setsenha(Senha);

  const voltarcliente = (): void => {
    navigation.navigate("Autenticacaocli");
  };

  const getUser = async () => {
    const get = await AsyncStorage.getItem("clientData")
      .then((data) => console.log("tem dados no cell", data))
      .catch((error) => console.log("erro ao achar usuario", error));
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    // const url = "http://10.0.0.105:3000/user/getAllUsers";
    // const fetchApi = async () => {
    //   try {
    //     const fetchData = await fetch(url, {
    //       method: "GET",
    //       headers: {
    //         Origin: "http://localhost:3000",
    //       },
    //     });
    //     const { data } = await fetchData.json();
    //     console.log("conectado com a api");
    //     console.log(data);
    //     setAllUsers(data);
    //   } catch (error) {
    //     console.log("error ao se conectar com a api do back", error);
    //   }
    // };
    // fetchApi();
  }, []);

  const entrar = () => {
    const clienteData: PickedCli = {
      nome: "Administrador",
      email: email,
      senha: senha,
    };
    if (email === "admin" && senha === "123") {
      navigation.navigate("roothomecliente", clienteData);
    } else alert("login ou sennhas incorretos");
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <StatusBar hidden={true}></StatusBar>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        style={{ width: "100%" }}
      >
        <Authenticheadrs
          arrowimg={require("../../../assets/arrowheadleft.png")}
          imgheader={require("../../../assets/loginimage1.png")}
          headertxt="Entrar como Cliente"
          trocarmodo={voltarcliente}
          ladoseta="flex-start"
        />

        {/* essa parte vai ser um componente */}

        <View style={[homeloginscss.blocoprincipal]}>
          <Inputs
            multiline={false}
            value=""
            nometxt="email *"
            placeholder=""
            issenha={false}
            onchangevalue={handleEmail}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
          />
          <Inputs
            multiline={false}
            value=""
            nometxt="senha *"
            placeholder=""
            onchangevalue={handleSenha}
            issenha={true}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
          />
          <View style={{ bottom: "10%" }}>
            <Btn
              cor="#C77B43"
              txtbtn="ENTRAR"
              txtcor="#FFFCFC"
              pres={entrar}
              fontsize={16}
              altura={48}
              largura={131}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Entrarcliente;
