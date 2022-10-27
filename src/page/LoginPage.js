import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from "../components/Login";

export default function LoginPage() {
    return (
        <SafeAreaView style={styles.container}>
            <Login />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center'
    }

}) 

