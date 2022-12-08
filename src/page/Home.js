import { Button, StyleSheet, Text, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

import { Entypo } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* PRIMEIRO CABEÇALHO */}
        <View>
          <Text style={styles.titleTxt}>Find Soccer</Text>
          <View style={styles.rowStyle}></View>
        </View>
        {/* ------------------------------------------------------ */}
        {/* SEGUNDO CABEÇALHO */}
        <View>
          <Text style={styles.paragraph}>
            <Text style={styles.txt}>FindSoccer</Text> é uma ferramenta de busca de quadras, onde sua maior funcionalidade é a busca de quadras mais próximas de sua região... Além disso <Text style={styles.txt}>Find Soccer</Text> também pode filtrar as quadras segundo sua preferência! Venha fazer parte!
          </Text>
        </View>
        {/* ------------------------------------------------------ */}
      </View>
      <View style={styles.body}>
        <View>
          <Card.Title
            style={[styles.card, styles.shadowProps]}
            title="Maiores Avaliações"
            left={(props) => <Entypo name="trophy" size={24} color="black" />}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Card.Title
            style={[styles.card, styles.shadowProps]}
            title="Estourando na Semana"
            left={(props) => <Entypo name="trophy" size={24} color="black" />}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Card.Title
            style={[styles.card, styles.shadowProps]}
            title="Mais próximas a você"
            left={(props) => <Entypo name="trophy" size={24} color="black" />}
          />
        </View>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  titleTxt: {
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  header: {
    margin: 20,
    height: '30%'
  },
  rowStyle: {
    marginTop: 2,
    borderWidth: 1,
    backgroundColor: '#000000',
    borderRadius: 10
  },
  body: {
    margin: 20
  },
  txt: {
    color: 'green',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  paragraph: {
    marginTop: 15,
    marginLeft: 20,
    textAlign: 'justify',
    borderRadius: 20,
    backgroundColor: '#E5E4E2',
    color: 'black',
    padding: 10,
    position: 'relative',
    borderTopLeftRadius: 0
  },
  body: {
    height: '70%',
    margin: 20
  },
  card: {
    backgroundColor: '#E5E4E2',
    borderRadius: 10,
  },
  shadowProps: {
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});