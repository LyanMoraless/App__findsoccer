import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  { AuthContext } from  '../contexts/Auth'

export default function Principal() {

    const { logout } = React.useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.botao}>
                    <TouchableOpacity style={styles.enviarInput} onPress={() => logout()}>
                        <Text style={styles.registra}>login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    enviarInput: {
        borderWidth: 1,
        height: 50,
        width: '90%',
        borderRadius: 9,
        marginBottom: 10
    },

})