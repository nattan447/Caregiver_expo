import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";

import { useState, useEffect } from "react";

import homeloginscss from "../../../../estilos/homeloginscss";

import { contratarRootParams } from "../../../../types/contratarRootParams";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { InitialScreenParamList } from "../../../../types/initialScreenType";

import { StripeProvider, usePaymentSheet } from "@stripe/stripe-react-native";

import { API_URL } from "./payment/Contants";

type PropsPagamentoCli = NativeStackScreenProps<
  InitialScreenParamList,
  "pagamentoInfo"
>;

const PagamentoinfoCli = ({ navigation, route }: PropsPagamentoCli) => {
  const [isReady, setIsReady] = useState(false);

  const secretkey =
    "sk_test_51OZvB5FNiBk4EO0GLkpITGGdCGQc1kKtybKmqAB1rhupgmTftUKc5eIQsILbzzXAtarjkeSiJZToLsM06VYeJvaB00YRRpm2Jk";

  const publishableKey =
    "pk_test_51OZvB5FNiBk4EO0GMV4aEVJThZ9aEu82hZAdWyvBQvVgxHPIh85RF0h42A6ydB2yKJUr8hcx0qe5eE8EtpfB2yhH00uWtwzGLl";
  const { loading, initPaymentSheet, presentPaymentSheet } = usePaymentSheet();

  async function buy() {
    const { error }: any = await presentPaymentSheet();
    if (error) {
      alert("deu erro");
      console.log(error);
    } else {
      alert("pagamento deu certo");
      setIsReady(false);
    }
  }

  useEffect(() => {
    initialisePaymentSheet();
  }, []);

  const initialisePaymentSheet = async () => {
    const { paymentItent, ephemeraKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      paymentIntentClientSecret: paymentItent,
      merchantDisplayName: "Example Inc.",
      allowsDelayedPaymentMethods: true,
      returnURL: "stripe-example://stripe-redirect",
      applePay: {
        merchantCountryCode: "US",
      },
      googlePay: {
        merchantCountryCode: "US",
        testEnv: true,
        currencyCode: "usd",
      },
    });
    if (error) {
      alert(`Error code: ${error.code}`);
      console.log(error);
    } else {
      setIsReady(true);
    }
  };

  const fetchPaymentSheetParams = async () => {
    const reponse = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { paymentItent, ephemeraKey, customer } = await reponse.json();
    return {
      paymentItent,
      ephemeraKey,
      customer,
    };
  };

  useEffect(() => {
    if (route.params) {
      console.log("possui dados nos parametros");

      console.log(route.params.horario?.toLocaleString());
    } else {
      console.error("não possui dados nos parametros");
    }
  }, []);

  return (
    <View style={pagamentoSyle.container}>
      <Text style={pagamentoSyle.headerTxt}>Informações de Pagamento</Text>

      <StripeProvider publishableKey={publishableKey}>
        <Text>ola mundo</Text>

        <Button title={"Buy"} onPress={buy} disabled={loading || !isReady} />
      </StripeProvider>
    </View>
  );
};
export { PagamentoinfoCli };

const pagamentoSyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTxt: {
    color: "#C77B43",
    fontSize: 24,
    marginTop: "4%",
  },
  cardField: {
    height: 35,
    width: "90%",
    marginBottom: 20,
  },
  cardForm: {
    height: 270,
    width: "80%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
});
