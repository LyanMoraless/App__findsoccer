import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import { AuthContext } from "../contexts/Auth";

export default function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = React.useState("nome@gmail.com");
    const [password, setPassword] = React.useState("senha");

    const { login } = React.useContext(AuthContext);

    const loginHandle = async () => {
        try {
            await login(email, password);
            navigation.navigate("Principal");
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>FintSoccer</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.login}>
                    <Text style={styles.textoLogin}>Login</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.textoInput}>Email ou Usuário</Text>
                    <TextInput style={[styles.Input, styles.shadowProp]} value={email} onChangeText={setEmail} />
                    <Text style={styles.textoInput}>Senha</Text>
                    <TextInput style={[styles.Input, styles.shadowProp]} secureTextEntry={password} value={password} onChangeText={setPassword} />
                </View>
                <View style={styles.botao}>
                    <TouchableOpacity style={styles.enviarInput}>
                        <Text style={styles.textoBotao} onPress={() => loginHandle()}>Enviar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.registraCard}>
                    <Text style={styles.conta}>Não possuir uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={styles.registra}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {

    },
    titulo: {
        textAlign: "center",
        padding: 10,
        fontSize: 20,
    },
    textoTitulo: {
        fontSize: 80,
        color: '#0FFA1F'
    },
    login: {
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 28,
        height: 60,
        width: '70%'
    },
    textoLogin: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        color: '#00D431',
        
    },
    card: {
        backgroundColor: '#fff',
        paddingTop: 40,
        marginRight: 5,
        marginLeft: 5,
        paddingBottom: 40,
        borderRadius: 10
    },
    form: {
        marginTop: 10,
        marginBottom: 10
    },
    Input: {
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 1,
        width: '90%',
        fontWeight: 1,
        padding: 10,
        color: '#FFFFF',
        borderColor: '#000000',
        borderWidth: 1,
        fontWeight: 'bold',
        borderRadius: 6
    },
    textoInput: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingTop: 8,
        paddingLeft: 25,
        paddingBottom: 8,
        fontSize: 20,
        left: 80

    },
    shadowProp: {
        shadowColor: '#23FA00',
        shadowOffset: { width: 7, height: 9 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    botao: {
        height: 50,
        width: '90%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 11,
        alignSelf: 'center'
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 30,
        color: '#00D431',
        paddingTop: 3,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    registraCard: {
        alignItems: 'center'

    },
    conta: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    registra: {
        fontSize: 20,
        color: '#00D431',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
})