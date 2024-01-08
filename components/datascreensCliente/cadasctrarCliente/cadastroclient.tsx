import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ApiIbgeInterface } from "../../interfacests/apiIbgeInterface";
import { styles } from "../../../desginscomponents/inputs";
import { useState, useEffect, useRef } from "react";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../../estilos/cadastro";
import Inputs from "../../../desginscomponents/inputs";
import { RouteProp, StackRouterOptions } from "@react-navigation/native";
import { Clientedatainterfc } from "../../interfacests/clienteInterface";
import { Combobox } from "../../../desginscomponents/inputs";
import * as ImagePicker from "expo-image-picker";
import { inputLengthCheck } from "../../fuctions/inputCheck";
type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "cadastrocliente"
>;
type PropsNavCadastroCliente = {
  navigation: AuthenticScreenNavigationProp;
  route: RouteProp<AuthenticRootParamList, "cadastrocliente">;
};
const Cadastrocliente: React.FC<PropsNavCadastroCliente> = ({
  navigation,
}: PropsNavCadastroCliente) => {
  const [clienteData, setClienteData] = useState<Clientedatainterfc>();
  const [isloadingEstados, setIsloadingEstados] = useState(true);
  const [ArrayEstado, SetArrayEstado] = useState<string[]>([]);
  const [EstadoValue, SetEstadoValue] = useState<string>("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const apiurl =
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
        const response = await fetch(apiurl);
        const data = await response.json();
        data.map((estado: ApiIbgeInterface) => {
          let accestado: string = estado.nome;
          SetArrayEstado((current) => [...current, estado.nome]);
        });
        setIsloadingEstados(false);
        console.log("sucesso ao acessar a api da Ibge");
        return true;
      } catch {
        console.log("erro ao acessar api Ibge");
        return false;
      }
    };
    fetchdata();
  }, []);

  const handleName = (Name: string) => {
    setClienteData({
      nome: Name,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
      Estado: clienteData?.Estado,
      cidade: clienteData?.cidade,
    });
  };

  const handleSobrenome = (Sobrenome: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: Sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
      Estado: clienteData?.Estado,
      cidade: clienteData?.cidade,
    });
  };

  const handleEmail = (Email: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: Email,
      senha: clienteData?.senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
      Estado: clienteData?.Estado,
      cidade: clienteData?.cidade,
    });
  };
  const handleSenha = (Senha: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: Senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
      Estado: clienteData?.Estado,
      cidade: clienteData?.cidade,
    });
  };

  const handleCpf = (Cpf: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
      cpf: Cpf,
      profileimg: clienteData?.profileimg,
      Estado: clienteData?.Estado,
      cidade: clienteData?.cidade,
    });
  };
  const handleCidade = (Cidade: string) => {
    setClienteData({
      nome: clienteData?.nome,
      sobrenome: clienteData?.sobrenome,
      email: clienteData?.email,
      senha: clienteData?.senha,
      cpf: clienteData?.cpf,
      profileimg: clienteData?.profileimg,
      Estado: clienteData?.Estado,
      cidade: Cidade,
    });
  };

  const pickImage = async () => {
    let Image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(Image);
    if (!Image.canceled) {
      setClienteData({
        nome: clienteData?.nome,
        sobrenome: clienteData?.sobrenome,
        email: clienteData?.email,
        senha: clienteData?.senha,
        cpf: clienteData?.cpf,
        profileimg: Image.assets[0].uri,
        Estado: clienteData?.Estado,
        cidade: clienteData?.cidade,
      });
    }
  };

  function handelEstado(Estado: string) {
    if (!isloadingEstados) {
      if (Estado != null) {
        SetEstadoValue(Estado);
      }
      setClienteData({
        nome: clienteData?.nome,
        sobrenome: clienteData?.sobrenome,
        email: clienteData?.email,
        senha: clienteData?.senha,
        cpf: clienteData?.cpf,
        profileimg: clienteData?.profileimg,
        Estado: Estado,
        cidade: clienteData?.cidade,
      });
    }
  }

  const goHome = (): void => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      inputLengthCheck(clienteData?.nome) >= 1 &&
      inputLengthCheck(clienteData?.email) >= 1 &&
      inputLengthCheck(clienteData?.senha) >= 1 &&
      inputLengthCheck(clienteData?.cpf) >= 1
    ) {
      if (regexEmail.test(clienteData?.email as string)) {
        if (inputLengthCheck(clienteData?.senha) < 5) {
          alert("digite uma senha com mais de 4 carácteres");
        } else {
          console.log("a senh tem mais de 4 carácteres ");
          if (inputLengthCheck(clienteData?.cpf) == 11) {
            if (clienteData) {
              navigation.navigate("roothomecliente", clienteData);
              console.log("dados conforme os padrões, cadastro acessivel");
            }
          } else alert("campo de cpf com caracteres insuficientes ");
        }
      } else alert("digite o email de forma correta");
    } else {
      alert("preecha todos dados");
    }
    console.log(clienteData);
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <ScrollView automaticallyAdjustKeyboardInsets style={{ width: "100%" }}>
          <Text style={cadastro.criarcontatxt}>Criar conta</Text>
          <Inputs
            value={clienteData?.nome}
            nometxt="nome *"
            placeholder="digite seu nome"
            onchangevalue={handleName}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
            multiline={false}
          />
          <Inputs
            nometxt="sobrenome *"
            value={clienteData?.sobrenome}
            placeholder="digite seu sobrenome"
            onchangevalue={handleSobrenome}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
            multiline={false}
          />

          <Inputs
            value={clienteData?.email}
            nometxt="email * "
            placeholder={"digite seu email"}
            onchangevalue={handleEmail}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn={"nada"}
            type="email-address"
            length={30}
            multiline={false}
          />
          <Inputs
            value={clienteData?.senha}
            nometxt="senha *"
            placeholder="digite sua senha"
            onchangevalue={handleSenha}
            issenha={true}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={10}
            multiline={false}
          />
          <Inputs
            value={clienteData?.cpf}
            nometxt="cpf *"
            placeholder="digite seu  cpf"
            onchangevalue={handleCpf}
            issenha={true}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={11}
            multiline={false}
          />
          <TouchableOpacity onPress={pickImage} style={{ alignSelf: "center" }}>
            <Text style={styles.txt}>Foto de perfil</Text>
            <View style={cadastro.inputimg}></View>
          </TouchableOpacity>
          {!isloadingEstados ? (
            <Combobox
              placeholder="selecione o Estado"
              textabove="Estado"
              initialvalue={EstadoValue}
              onchange={handelEstado}
              arrayvalues={ArrayEstado}
            />
          ) : (
            <ActivityIndicator size="large" color="orange" />
          )}
          <Inputs
            value={clienteData?.cidade}
            nometxt="cidade"
            placeholder="digite sua cidade"
            onchangevalue={handleCidade}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
            multiline={false}
          />
          <Btn
            cor="#F1EBEB"
            txtbtn="próximo"
            txtcor="#C77B43"
            pres={goHome}
            fontsize={16}
            altura={40}
            largura={200}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocliente;
