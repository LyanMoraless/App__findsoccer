import { Button, StyleSheet, Text, View } from "react-native";
import { Card } from 'react-native-paper';

import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

export default function Locais() {
  const { logout } = useContext(AuthContext) 

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={{ marginTop: 15 }}>
          <Button
            title="Sair"
            onPress={() => logout()}
          />
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  header: {
    height: '10%'
  },
})