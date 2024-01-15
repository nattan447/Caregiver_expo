import { Cuidadadordatainterfc } from "../components/interfacests/cuidadordata";
import { Clientedatainterfc } from "../components/interfacests/clienteInterface";
import { PickedData } from "../components/datascreenscuid/entrada/entrarcuid";
import { PickedCli } from "../components/datascreensCliente/entrar/entrarclient";
type AuthenticRootParamList = {
  Autenticacaocli: undefined;
  entrarcliente: undefined;
  Autenticacaocuid: undefined;
  entrarcuidador: undefined;
  Cadastrocuidador: undefined;
  Cadastrocuidador2: object;
  Cadastrocuidador3: object;
  Homenavigator: Cuidadadordatainterfc | PickedData;
  cadastrocliente: undefined;
  roothomecliente: Clientedatainterfc | PickedCli;
  homecliente: undefined;
  configuracao: undefined;
};
export { AuthenticRootParamList };
