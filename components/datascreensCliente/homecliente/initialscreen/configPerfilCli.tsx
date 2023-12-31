import { Text, View, Button, SafeAreaView, ScrollView } from "react-native";
import homeloginscss from "../../../../estilos/homeloginscss";
import { ConfiguracaoStyle } from "./styles/configuracaostyle";
import { useEffect, useState, useContext } from "react";
import { Clientedatacontext } from "../datacontext/clitentedata";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
import { InputConfig } from "../../../homecomponents/initialScreenComp/configComponents/inputConfig";
import { Btn } from "../../../../desginscomponents/authenticheadrs";
const ConfigPerfilCli = () => {
  const clienteData: Clientedatainterfc | undefined = Clientedatacontext
    ? useContext(Clientedatacontext)
    : undefined;
  return (
    <SafeAreaView style={homeloginscss.container}>
      <InputConfig
        txt="nome"
        placeholder="digite seu nome"
        value={clienteData?.nome}
      />
      <InputConfig
        txt="sobrenome"
        placeholder="digite seu sobrenome"
        value={clienteData?.sobrenome}
      />
      <InputConfig
        txt="email"
        placeholder="digite seu email"
        value={clienteData?.email}
      />
      <InputConfig
        txt="senha"
        placeholder="digite sua senha"
        value={clienteData?.senha}
      />
      <InputConfig
        txt="cpf"
        placeholder="digite sua cpf"
        value={clienteData?.cpf}
      />
      <Btn
        cor="#F1EBEB"
        txtbtn="salvar"
        txtcor="#C77B43"
        fontsize={16}
        altura={40}
        largura={200}
        pres={() => alert("salvo na padaria")}
      />
    </SafeAreaView>
  );
};

export { ConfigPerfilCli };
