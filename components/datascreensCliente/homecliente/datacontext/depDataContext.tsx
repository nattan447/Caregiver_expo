import { createContext } from "react";

import { DepDataInterface } from "../../../interfacests/depDataInterface";

const DepDataContextCli = createContext<DepDataInterface>({
  nome: undefined,
  idade: undefined,
  quadro: undefined,
  descricao: undefined,
});
export { DepDataContextCli };
