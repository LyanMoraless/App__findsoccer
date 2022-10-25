import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function Locais() {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20, }}>
        <View>
          <Card.Title
            style={styles.card}
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  }
})