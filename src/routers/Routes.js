import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../page/LoginPage"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}