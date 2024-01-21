import { Cuidadadordatainterfc } from "../components/interfacests/cuidadordata";

import { Clientedatainterfc } from "../components/interfacests/clienteInterface";

import { ServiceDetailsInter } from "../components/interfacests/sercideDetailsInterface";

import { ContratoInfoInter } from "../components/interfacests/contratoInter";

type InitialScreenParamList = {
  homeCliente: undefined;
  homeTab: undefined;
  configuracaoCli: undefined;
  configPerfil: undefined;
  addDepCli: undefined;
  notificationCli: undefined;
  configPerfilDep: undefined;
  serviceDetails: ServiceDetailsInter;
  propostaService: ServiceDetailsInter;
  finished: undefined;
  pendent: undefined;
  inProcess: undefined;
  Contratar: undefined;
  perfilContratado: ServiceDetailsInter;
  infoContrato: ServiceDetailsInter;
  pagamentoInfo: ContratoInfoInter;
};
export { InitialScreenParamList };
