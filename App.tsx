import React from "react";
import Login from "./src/screens/login";
import Home from "./src/screens/home";
import New from "./src/screens/New";

import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider>
      {/*essa status bar mostra como o App vai admin a barra do topo do celular, que contém hora, bateria, wifi etc*/}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Home /> : <Loading/> }    
    </NativeBaseProvider>
  );
}

/* 

https://docs.nativebase.io/default-theme

https://www.figma.com/design/l8OmDgXTTaPIHDrGQTz0So/Rocket-Help---Ignite-Lab-(Community)?t=5amiPftOzOavmgVl-0

npx expo install @expo-google-fonts/roboto 

npm install native-base

expo install react-native-svg@12.1.1

expo install react-native-safe-area-context@3.3.2

*/