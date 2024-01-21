import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";

import Splashscreen from "./splash/splashscreen";

import { useEffect, useState } from "react";

import { PrincipalRoute } from "./routes/principalRoute";

import { Linking, Platform } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const PERSISTENCE_KEY = "ActualState";

export default function App() {
  const [isvideoOver, setisvideoOver] = useState(false);

  const [isReady, setIsReady] = useState(false);

  const [initialState, setInitialState] = useState();

  useEffect(() => {
    setTimeout(() => {
      setisvideoOver(true);
    }, 9000);
  }, []);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) => {
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
      }}
    >
      {isvideoOver ? <PrincipalRoute /> : <Splashscreen />}
    </NavigationContainer>
  );
}
