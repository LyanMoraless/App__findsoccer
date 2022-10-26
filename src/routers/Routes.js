import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons'

import Login from "../page/LoginPage";
import Home from "../page/Home";
import Quadras from "../page/Quadras";
import Locais from "../page/Locais";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OverView" component={() =>
                <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                size = 35
                                break;
                            case 'Quadras':
                                iconName = 'dribbble';
                                size = 20
                                break;
                            case 'Locais':
                                iconName = 'enviromento';
                                size = 20
                                break;
                        }

                        return <AntDesign name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FF0000',
                    tabBarInactiveTintColor: 'gray',
                })}>
                    <Tab.Screen name='Quadras' component={Quadras} options={{ headerShown: false }} />
                    <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
                    <Tab.Screen name='Locais' component={Locais} options={{ headerShown: false }} />
                </Tab.Navigator>
            } />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}