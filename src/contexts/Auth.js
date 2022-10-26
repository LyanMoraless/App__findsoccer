import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null)

    const login = async (email, password) => {
        if (email == "nome@gmail.com" && password == "senha") {
            const user = {
                email: "nome@gmail.com",
                name: "joao"
            };
            setUser(user);
            try {
                await AsyncStorage.setItem('user', JSON.
                stringify(user));
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            setUser(null);
            throw new Error("Usuário ou senha inválidos!");
        }
    }


    const logout = async () => {
        setUser(null);
        try {
            await AsyncStorage.setItem('user', null);
        }
        catch (err) {
            console.log(err);
        }
    }

    const carregar = async () => {
        try {
            const v = await AsyncStorage .getItem('user');
            setUser(v !=null ? JSON.parse(v): null);
        }
        catch (err) {
            setUser(null);
            console.log(err);
        }
    }

    useEffect(() => {carregar();
    console.log("MONTAR");

    return () => {
        console.log("DESMONTAR")
    }

}, [])

    const authorized = user != null;

    return(
        <AuthContext.Provider value={{ user, authorized, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}