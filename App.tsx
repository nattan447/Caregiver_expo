import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Splashscreen from "./splash/splashscreen";
import { useEffect, useState } from "react";
import { PrincipalRoute } from "./routes/principalRoute";
export default function App() {
  const [isvideoOver, setisvideoOver] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisvideoOver(true);
    }, 9000);
  }, []);

  return (
    <NavigationContainer>
      {isvideoOver ? <PrincipalRoute /> : <Splashscreen />}
    </NavigationContainer>
  );
}
