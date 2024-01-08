import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Easing,
  ActivityIndicator,
} from "react-native";
import { ApiIbgeInterface } from "../../interfacests/apiIbgeInterface";
import { useState, useEffect, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";
import { AuthenticRootParamList } from "../../../types/authenticRoot";
import { Btn } from "../../../desginscomponents/authenticheadrs";
import homeloginscss from "../../../estilos/homeloginscss";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import cadastro from "../../../estilos/cadastro";
import Inputs from "../../../desginscomponents/inputs";
import { RouteProp } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import { Combobox } from "../../../desginscomponents/inputs";
import { inputLengthCheck } from "../../fuctions/inputCheck";

type AuthenticScreenNavigationProp = NativeStackNavigationProp<
  AuthenticRootParamList,
  "Cadastrocuidador3"
>;
type PropsNavCuidador2 = {
  navigation: AuthenticScreenNavigationProp;
  route: RouteProp<AuthenticRootParamList, "Cadastrocuidador3">;
};

const Cadastrocuidador3: React.FC<PropsNavCuidador2> = ({
  navigation,
  route,
}: PropsNavCuidador2) => {
  const [cuidadordata, SetCuidadordata] = useState<Cuidadadordatainterfc>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    profissao: "",
    descricao: "",
    profileimg: "",
    cpf: "",
    datanasc: "",
    estado: "",
    cidade: "",
    rua: "",
    cep: "",
  });

  const [ArrayEstado, SetArrayEstado] = useState<string[]>([]);
  const [isloadingEstados, setIsloadingEstados] = useState(true);

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
        console.log("sucesso ao acessar a api");
        return true;
      } catch {
        console.log("erro ao acessar api");
        return false;
      }
    };
    fetchdata();
    if (route.params) {
      console.log("possui dados nos parametros");
      const { datacuidador }: { datacuidador?: Cuidadadordatainterfc } =
        route.params;
      if (datacuidador) {
        console.log("dados do cuidador existe");
        console.log(datacuidador);
        SetCuidadordata(datacuidador);
      }
    }
  }, []);

  const [EstadoValue, SetEstadoValue] = useState<string>("");
  function handelEstado(Estado: string) {
    if (!isloadingEstados) {
      if (Estado != null) {
        SetEstadoValue(Estado);
      }
      SetCuidadordata({
        nome: cuidadordata.nome,
        sobrenome: cuidadordata.sobrenome,
        email: cuidadordata.email,
        senha: cuidadordata.senha,
        profissao: cuidadordata.profissao,
        descricao: cuidadordata.descricao,
        profileimg: cuidadordata.profileimg,
        cpf: cuidadordata.cpf,
        datanasc: cuidadordata.datanasc,
        estado: Estado,
        cidade: cuidadordata.cidade,
        rua: cuidadordata.rua,
        cep: cuidadordata.cep,
      });
    }
  }

  function handlecidade(Cidade: string) {
    SetCuidadordata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: cuidadordata.profileimg,
      cpf: cuidadordata.cpf,
      datanasc: cuidadordata.datanasc,
      estado: cuidadordata.estado,
      cidade: Cidade,
      rua: cuidadordata.rua,
      cep: cuidadordata.cep,
    });
  }

  function handlerua(Rua: string) {
    SetCuidadordata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: cuidadordata.profileimg,
      cpf: cuidadordata.cpf,
      datanasc: cuidadordata.datanasc,
      estado: cuidadordata.estado,
      cidade: cuidadordata.cidade,
      rua: Rua,
      cep: cuidadordata.cep,
    });
  }

  function handlecep(Cep: string) {
    SetCuidadordata({
      nome: cuidadordata.nome,
      sobrenome: cuidadordata.sobrenome,
      email: cuidadordata.email,
      senha: cuidadordata.senha,
      profissao: cuidadordata.profissao,
      descricao: cuidadordata.descricao,
      profileimg: cuidadordata.profileimg,
      cpf: cuidadordata.cpf,
      datanasc: cuidadordata.datanasc,
      estado: cuidadordata.estado,
      cidade: cuidadordata.cidade,
      rua: cuidadordata.rua,
      cep: Cep,
    });
  }

  const goHomescreen = (): void => {
    const values = Object.values(cuidadordata);
    console.log("numeros de dados no obj: " + values);
    if (values.length > 8) {
      if (cuidadordata.cep) {
        if (inputLengthCheck(cuidadordata.cep) < 8) {
          alert("caracteres de cep insuficientes");
          console.log("não caracter suficientes no cep");
        } else {
          console.log("cadastro completo");
          navigation.navigate("Homenavigator", cuidadordata);
        }
      } else navigation.navigate("Homenavigator", cuidadordata);
    }
  };

  return (
    <SafeAreaView style={homeloginscss.container}>
      <View style={cadastro.cadastroview2}>
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          style={{ width: "100%" }}
        >
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
            nometxt="cidade "
            placeholder="digite sua cidade"
            value={cuidadordata.cidade}
            onchangevalue={handlecidade}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
            multiline={false}
          />
          <Inputs
            nometxt="rua "
            placeholder="digite sua rua"
            value={cuidadordata.rua}
            onchangevalue={handlerua}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="default"
            length={40}
            multiline={false}
          />
          <Inputs
            nometxt="cep "
            placeholder="digite seu cep"
            value={cuidadordata.cep}
            onchangevalue={handlecep}
            issenha={false}
            tamanho={{ height: 40 }}
            emailwarn=""
            type="numeric"
            length={10}
            multiline={false}
          />

          <Btn
            cor="#F1EBEB"
            txtbtn="cadastrar"
            txtcor="#C77B43"
            pres={goHomescreen}
            fontsize={16}
            altura={40}
            largura={100}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cadastrocuidador3;
