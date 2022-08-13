import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'

const ShowSortedItemComponent = ({ item, handleClose }) => {

  function handleCloseView() {
    handleClose()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.presentationText}>O filme escolhido foi:</Text>
      <Text style={styles.titleText}>{item.title}</Text>

      <TouchableOpacity style={styles.button} onPress={handleClose}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <ConfettiCannon count={200} origin={{ x: 180, y: 90 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  presentationText: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 50,
  },
  titleText: {
    color: '#fff',
    fontSize: 55
  },
  button: {
    width: '90%',
    height: 60,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginBottom: 15,
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export { ShowSortedItemComponent }
