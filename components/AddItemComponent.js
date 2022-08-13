import { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'

const AddItemComponent = ({ addItem, handleClose }) => {
  const [item, setItem] = useState('')

  function addNewItem() {
    const movie = {
      id: Math.floor(Math.random() * 1000),
      title: item
    }
    addItem(movie)
    setItem('')
  }

  function handleCloseView() {
    handleClose()
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          onChangeText={setItem}
          value={item}
          placeholder="Nome do filme"
        />
        <TouchableOpacity style={styles.button} onPress={addNewItem}>
          <Text style={styles.buttonText}> Adicionar </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.cancel} onPress={handleCloseView}>Fechar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    padding: '5%',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputGroup: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    outline: '#00bfff',
    borderColor: '#989898',
    color: '#989898',
    borderRadius: 9,
    padding: 12,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cancel: {
    color: '#00bfff',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginTop: 18,
  }
});


export { AddItemComponent }
