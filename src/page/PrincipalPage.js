import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import Principal from "../components/Principal";

export default function LoginPage() {
    return (
        <SafeAreaView style={styles.container}>
            <Principal />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }

}) 

