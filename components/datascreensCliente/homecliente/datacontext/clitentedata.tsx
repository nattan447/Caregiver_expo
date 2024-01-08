import { createContext } from "react";
import { Clientedatainterfc } from "../../../interfacests/clienteInterface";

const Clientedatacontext = createContext<undefined | Clientedatainterfc>(
  undefined
);
export { Clientedatacontext };
