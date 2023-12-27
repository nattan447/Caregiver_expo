import { createContext } from "react";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";
const Clientedatacontext = createContext<Clientedatainterfc | undefined>(
  undefined
);
export { Clientedatacontext };
