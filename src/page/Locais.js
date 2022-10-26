import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LocaisContext } from "../contexts/Locais";
import { Card } from 'react-native-paper';

import { Entypo } from '@expo/vector-icons';

export default function Locais() {

  const { locais, listLocais } = useContext(LocaisContext);

  useEffect(() => {
    listLocais();
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.txt}>Lista dos Locais </Text>
        <View style={styles.row}></View>
      </View>

      <View style={styles.body}>
        {quadras.map((local) => (
          <Card.Title
            style={styles.card}
            title={local.nome}
            subtitle={local.descricao}
            left={(props) => <Entypo name="trophy" size={24} color="black" />}
          // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 7
  },
  header: {
    height: '10%'
  },
  body: {
    height: '90%'
  },
  txt: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  row: {
    borderWidth: 1,
    backgroundColor: '#000000',
    borderRadius: 4,
    marginTop: 3
  }
})