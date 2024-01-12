import { Text, View, Button, SafeAreaView, ScrollView } from "react-native";
import homeloginscss from "../../../../estilos/homeloginscss";
import { ConfiguracaoStyle } from "./styles/configuracaostyle";
import { useEffect, useState, useContext } from "react";
import { Clientedatacontext } from "../datacontext/clitentedata";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
import { InputConfig } from "../../../homecomponents/initialScreenComp/configComponents/inputConfig";
import { Btn } from "../../../../desginscomponents/authenticheadrs";
import { inputLengthCheck } from "../../../fuctions/inputCheck";

const ConfigPerfilCli = () => {

  const { clienteData,setClienteData }: any = useContext(Clientedatacontext);;
    
  const [newData, setNewData] = useState<Clientedatainterfc>(clienteData);

  useEffect(() => {
    console.log(clienteData);
  }, []);

  const changeName = (Name: string) => setNewData({...newData,nome:Name});

  const changeSobrenome = (Sobrenome: string) => setNewData({...newData,sobrenome: Sobrenome,});

  const changeEmail = (Email: string) => setNewData({ ...newData,email: Email,});

  const changeSenha = (Senha: string) => setNewData({...newData,senha: Senha,});
  
  const changeCpf = (Cpf: string) =>  setNewData({...newData,cpf: Cpf,});
  
  const changeEstado = (estate: string) => setNewData({...newData,Estado: estate,});
 
  const changeCidade = (Cidade: string) => setNewData({...newData,cidade: Cidade,});


  function saveChangesDatas() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      inputLengthCheck(newData?.nome) >= 1 &&
      inputLengthCheck(newData?.email) >= 1 &&
      inputLengthCheck(newData?.senha) >= 1 &&
      inputLengthCheck(newData?.cpf) >= 1
    ) {
      switch (regexEmail.test(newData?.email as string)) {
        case true:
          console.log("email passou no teste");
          if (inputLengthCheck(newData?.senha) > 4) {
            console.log("passou no teste da senha");
            switch (inputLengthCheck(newData?.cpf)) {
              case 11:
                console.log("passou na fase do cpf");
                console.log("usuario pode salvar os dados sem problemas");
                alert("dados salvos com sucesso");
                break;
              default:
                alert("o campo Cpf precisa ter 11 caracteres");
                console.log("não passou no teste de cpf");
            }
          } else {
            alert("a senha deve ter mais de 4 caracteres");
          }
          break;
        case false:
          alert("digite o modelo de email correto");
        default:
          console.log("erro no email");
      }
    } else {
      alert("dados obrigatórios vazios");
    }
    setClienteData(newData);
    console.log(newData);
  }

  return (
    <SafeAreaView style={homeloginscss.container}>
      <ScrollView style={{ width: "100%" }}>
        <InputConfig
          maxLength={40}
          isPassWord={false}
          txt="nome"
          placeholder="digite seu nome"
          value={newData?.nome}
          onchangeValue={changeName}
          type="default"
        />
        <InputConfig
          maxLength={40}
          isPassWord={false}
          txt="sobrenome"
          placeholder="digite seu sobrenome"
          value={newData?.sobrenome}
          onchangeValue={changeSobrenome}
          type="default"
        />
        <InputConfig
          maxLength={40}
          isPassWord={false}
          txt="email"
          placeholder="digite seu email"
          value={newData?.email}
          onchangeValue={changeEmail}
          type="email-address"
        />
        <InputConfig
          maxLength={20}
          isPassWord={true}
          txt="senha"
          placeholder="digite sua senha"
          value={newData?.senha}
          onchangeValue={changeSenha}
          type="default"
        />
        <InputConfig
          maxLength={11}
          isPassWord={false}
          txt="cpf"
          placeholder="digite sua cpf"
          value={newData?.cpf}
          onchangeValue={changeCpf}
          type="numeric"
        />
        <InputConfig
          maxLength={40}
          isPassWord={false}
          txt="Estado"
          placeholder=" digite seu Estado"
          value={newData?.Estado}
          onchangeValue={changeEstado}
          type="default"
        />
        <InputConfig
          maxLength={40}
          isPassWord={false}
          txt="Cidade"
          placeholder="digite sua cidade"
          value={newData?.cidade}
          onchangeValue={changeCidade}
          type="default"
        />
        <Btn
          cor="#F1EBEB"
          txtbtn="salvar"
          txtcor="#C77B43"
          fontsize={16}
          altura={40}
          largura={200}
          pres={saveChangesDatas}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export { ConfigPerfilCli };
