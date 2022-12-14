import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

import { AuthContext } from "../contexts/Auth";
import { AntDesign } from '@expo/vector-icons'

import Login from "../page/LoginPage";
import Home from "../page/Home";
import Quadras from "../page/Quadras";
import User from "../page/User";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export default function Routes() {

    const { authorized } = useContext(AuthContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            {authorized ? (
                <>
                    <Stack.Screen options={{
                        headerRight: () => (
                            <TouchableOpacity
                                style={styles.botao}
                            >
                                <Text style={styles.texto}>Sair</Text>
                            </TouchableOpacity>
                        )
                    }} name="OverView" component={() =>
                        <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
                            tabBarIcon: ({ color, size }) => {
                                let iconName;

                                switch (route.name) {
                                    case 'Home':
                                        iconName = 'home';
                                        size = 26
                                        break;
                                    case 'Quadras':
                                        iconName = 'dribbble';
                                        size = 20
                                        break;
                                    case 'Usuario':
                                        iconName = 'user';
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
                            <Tab.Screen name='Usuario' component={User} options={{ headerShown: false }} />
                        </Tab.Navigator>
                    } />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} />
                </>
            )}
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'green',
    },
})