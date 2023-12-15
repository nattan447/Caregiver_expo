import { createContext } from "react";
import { Cuidadadordatainterfc } from "../../interfacests/cuidadordata";

const Caredatacontext = createContext<Cuidadadordatainterfc | undefined>(
  undefined
);
export default Caredatacontext;
