import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { ConfigPerfilCli } from "../../components/datascreensCliente/homecliente/initialscreen/configPerfilCli";

import { ConfiguracaoCli } from "../../components/datascreensCliente/homecliente/initialscreen/configuracao1";

import { AddDependentCli } from "../../components/datascreensCliente/homecliente/initialscreen/dependente/addDepCli";

import { InitialScreenParamList } from "../../types/initialScreenType";

import { NotificationCli } from "../../components/datascreensCliente/homecliente/initialscreen/notifications/notificationCli";

import { ConfigDepCli } from "../../components/datascreensCliente/homecliente/initialscreen/configDep/configDepCli";

import { useEffect, useState, useContext } from "react";

import { HomeTabRouteCli } from "./homeTabRouteCli";

import { AuthenticRootParamList } from "../../types/authenticRoot";

import { Clientedatacontext } from "../../components/datascreensCliente/homecliente/datacontext/clitentedata";

import { Clientedatainterfc } from "../../components/interfacests/clienteInterface";

import { DepDataInterface } from "../../components/interfacests/depDataInterface";

import { DepDataContextCli } from "../../components/datascreensCliente/homecliente/datacontext/depDataContext";

import { ServiceDetails } from "../../components/datascreensCliente/homecliente/processoScrens/details/serviceDetails";

import { PerfilContratado } from "../../components/datascreensCliente/homecliente/contratacaoclie/perfil";

import { InfoContratoCli } from "../../components/datascreensCliente/homecliente/contratacaoclie/infocontrato";

import { PagamentoinfoCli } from "../../components/datascreensCliente/homecliente/contratacaoclie/pagamentoinfo";

const Stack = createNativeStackNavigator<InitialScreenParamList>();

type PropsHomeFromAuthenticScreen = NativeStackScreenProps<
  AuthenticRootParamList,
  "roothomecliente"
>;

const InitialScreenRouteCli = ({ route }: PropsHomeFromAuthenticScreen) => {
  const [depDataContext, setDepDataContext] = useState<DepDataInterface>();

  const [clienteData, setClienteData] = useState<Clientedatainterfc>();

  useEffect(() => {
    if (route.params) {
      const clienteDataFromNav = route.params as Clientedatainterfc;

      if (clienteDataFromNav != undefined) setClienteData(clienteDataFromNav);
    }
  }, [route.params]);

  return (
    <Clientedatacontext.Provider
      value={{ clienteData, setClienteData } as unknown as Clientedatainterfc}
    >
      <DepDataContextCli.Provider
        value={
          { depDataContext, setDepDataContext } as unknown as DepDataInterface
        }
      >
        <Stack.Navigator>
          <Stack.Screen
            name="homeTab"
            component={HomeTabRouteCli}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="configuracaoCli"
            component={ConfiguracaoCli}
            options={headerStyle2}
          />

          <Stack.Screen
            name="configPerfil"
            component={ConfigPerfilCli}
            options={headerStyle1}
          />

          <Stack.Screen
            name="addDepCli"
            component={AddDependentCli}
            options={{ ...headerStyle2, headerShown: true }}
          />

          <Stack.Screen
            name="configPerfilDep"
            component={ConfigDepCli}
            options={headerStyle1}
          />

          <Stack.Screen
            name="notificationCli"
            component={NotificationCli}
            options={{ ...headerStyle1, headerShown: true }}
          />

          <Stack.Screen
            name="serviceDetails"
            component={ServiceDetails}
            options={{ ...headerStyle1, headerShown: true }}
          />

          <Stack.Screen
            name="perfilContratado"
            component={PerfilContratado}
            options={{ ...headerStyle1, headerShown: true }}
          />

          <Stack.Screen
            name="infoContrato"
            component={InfoContratoCli}
            options={{ ...headerStyle1, headerShown: true }}
          />

          <Stack.Screen
            name="pagamentoInfo"
            component={PagamentoinfoCli}
            options={{ ...headerStyle1, headerShown: true }}
          />
        </Stack.Navigator>
      </DepDataContextCli.Provider>
    </Clientedatacontext.Provider>
  );
};
export { InitialScreenRouteCli };

const headerStyle1 = {
  headerShown: true,
  title: "",
  headerTintColor: "#C77B43",
  headerStyle: {
    backgroundColor: "#F8F8F8",
  },
};

const headerStyle2 = {
  headerShown: true,
  title: "",
  headerStyle: {
    backgroundColor: "#607D8B",
  },
};
