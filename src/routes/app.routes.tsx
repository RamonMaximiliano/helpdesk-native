import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Details from "../screens/Details";
import New from "../screens/New";
import Login from "../screens/login";
import Register from "../screens/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="login" component={Login} />
            <Screen name="home" component={Home} />
            <Screen name="details" component={Details} />
            <Screen name="new" component={New} />
            <Screen name="register" component={Register} />
        </Navigator>
    )
}