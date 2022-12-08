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
            <View style={styles.header}>
                <Text style={styles.textoTitulo}>FindSoccer</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.card}>
                    <Text style={styles.textoLogin}>Login</Text>

                    <Text style={styles.textoInput}>Email ou Usuário</Text>
                    <TextInput style={[styles.input, styles.shadowProp]} value={email} onChangeText={setEmail} />
                    <Text style={styles.textoInput}>Senha</Text>
                    <TextInput style={[styles.input, styles.shadowProp]} secureTextEntry={true} value={password} onChangeText={setPassword} />

                    <View style={styles.botao}>
                        <TouchableOpacity style={styles.enviarInput}>
                            <Text style={styles.textoBotao} onPress={() => loginHandle()}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registraCard}>
                        <Text style={styles.conta}>Não possui uma conta?</Text>
                        <TouchableOpacity>
                            <Text style={styles.registra}>Registre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    header: {
        height: '20%',
    },
    body: {
        height: '80%'
    },
    textoTitulo: {
        fontSize: 70,
        color: '#0FFA1F',
        justifyContent: 'center',
        textAlign: "center",
        fontWeight: 'bold',
    },
    textoLogin: {
        fontStyle: 'italic',
        fontSize: 40,
        textAlign: 'center',
        color: '#00D431',
        marginBottom: 30
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 10
    },
    input: {
        alignSelf: 'center',
        fontSize: 15,
        marginBottom: 1,
        width: '100%',
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
        fontSize: 20,
    },
    shadowProp: {
        shadowColor: '#23FA00',
        shadowOffset: { width: 7, height: 9 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    botao: {
        height: 50,
        width: '100%',
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
    },
    registraCard: {
        alignItems: 'center',
        flexDirection: 'row'
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