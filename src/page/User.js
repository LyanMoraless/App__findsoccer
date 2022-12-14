import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Card } from 'react-native-paper';

import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { QuadrasContext } from "../contexts/Quadras";

import { Entypo } from '@expo/vector-icons';

export default function Locais() {

  const { quadras, listQuadras } = useContext(QuadrasContext);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.image}>
          <Image
            style={styles.img}
            source={require('../../assets/user.jpg')}
          />
        </View>
        <View style={styles.infos}>
          <Text style={styles.txtPrincipal}>Lyan Morales</Text>
          <View style={styles.row}>
            <Text style={styles.afterTxt}>
              <Text style={styles.fontDetail}>Cpf  </Text>
              390.079.978.40
            </Text>
            <Text style={styles.afterTxt}>
              <Text style={styles.fontDetail}>Rg  </Text>
              52.996.616-5
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.afterTxt}>
              <Text style={styles.fontDetail}>Idade  </Text>
              17 anos
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.headerBody}>
          <Text style={styles.title}> Quadras Favoritas</Text>
          <View style={{ width: '80%' }}>
            <View style={styles.rowType}></View>
          </View>
        </View>
        <View style={styles.bodyContent}>
          {quadras.map((quadra) => (
            <Card.Title key={quadra.id}
              style={styles.card}
              title={quadra.nome}
              subtitle={quadra.descricao}
              left={(props) => <Entypo name="trophy" size={24} color="black" />}
            />
          ))}

          <View style={styles.bodyDetails}>
            <Text style={styles.titleTwo}>Quadras Cadastradas</Text>
            <Text style={styles.bold}>17</Text>
          </View>
          <View style={styles.bodyDetails}>
            <Text style={styles.titleTwo}>Quadras Acessadas</Text>
            <Text style={styles.bold}>211</Text>
          </View>
          <View style={styles.bodyDetails}>
            <Text style={styles.titleTwo}>Quadras Avaliadas</Text>
            <Text style={styles.bold}>142</Text>
          </View>
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
    height: '25%',
    flexDirection: 'row',
  },
  img: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'black',
  },
  body: {
    height: '90%',
    marginTop: 10
  },
  image: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infos: {
    width: '60%',
    justifyContent: 'center'
  },
  txtPrincipal: {
    fontSize: 24,
    marginBottom: 10
  },
  afterTxt: {
    fontStyle: 'italic',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fontDetail: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  rowType: {
    borderWidth: 1,
    backgroundColor: 'black',
    marginTop: 4,
    marginLeft: 5,
    borderTopEndRadius: 14,
    borderBottomEndRadius: 14
  },
  bodyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  titleTwo: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 4
  },
  bold: {
    fontWeight: 'bold'
  }
})