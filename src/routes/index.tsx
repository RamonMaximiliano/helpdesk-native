import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/login";
import { AppRoutes } from "./app.routes";


export function Routes(){
    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}
