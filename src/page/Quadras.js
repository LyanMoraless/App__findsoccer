import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { QuadrasContext } from "../contexts/Quadras";
import { Avatar, Card, IconButton } from 'react-native-paper';

import { Entypo } from '@expo/vector-icons';

export default function Quadras() {

  const { quadras, listQuadras } = useContext(QuadrasContext);

  useEffect(() => {
    listQuadras();
  }, []);

  return (
    <View style={styles.container}>

    <View style={styles.header}>
      <Text style={styles.txt}>Lista das Quadras</Text>
      <View style={styles.row}></View>
    </View>

      {quadras.map((quadra) => (
          <View style={styles.body}>
            <Card.Title
              style={styles.card}
              title={quadra.nome}
              subtitle={quadra.descricao}
              left={(props) => <Entypo name="trophy" size={24} color="black" /> }
              // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
            />
        </View>
      ))}
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
    margin: 5
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