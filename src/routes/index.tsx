import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/login";
import { AppRoutes } from "./app.routes";
import Register from "../screens/Register";


export function Routes(){
    return (
        <NavigationContainer>
            <Register/>
        </NavigationContainer>
    )
}
