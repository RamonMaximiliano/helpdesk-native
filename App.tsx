import React from "react";
import Login from "./src/screens/login";
import Home from "./src/screens/home";
import New from "./src/screens/New";
import { Routes } from "./src/routes";
import { TicketProvider } from "./src/provider/TicketContext";

import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <TicketProvider>
    <NativeBaseProvider>
      {/*essa status bar mostra como o App vai admin a barra do topo do celular, que contém hora, bateria, wifi etc*/}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
   
        {fontsLoaded ? <Routes /> : <Loading />}

    </NativeBaseProvider>
    </TicketProvider>
  );
}

/* 

https://docs.nativebase.io/default-theme

https://www.figma.com/design/l8OmDgXTTaPIHDrGQTz0So/Rocket-Help---Ignite-Lab-(Community)?t=5amiPftOzOavmgVl-0

npx expo install @expo-google-fonts/roboto 

npm install native-base

expo install react-native-svg@12.1.1

expo install react-native-safe-area-context@3.3.2


NAVIGATION:

npm install @react-navigation/native --legacy-peer-deps

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack --legacy-peer-deps



TO DO:
- Create register page
- Global context
- Validate login 
- Register new ticket in user profile 
- Finish details page
- Mark ticket as finished 
- Delete ticket from details page

*/