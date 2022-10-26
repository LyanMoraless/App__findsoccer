import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Principal from "../page/PrincipalPage"
import Login from "../page/LoginPage"
import { AuthContext } from "../contexts/Auth";

const Stack = createNativeStackNavigator()

export default function Routes() {

    const { authorized } = useContext(AuthContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            {authorized ? (
                <>
                    <Stack.Screen name="Principal" component={Principal} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} />
                </>
            )}
        </Stack.Navigator>
    )
}