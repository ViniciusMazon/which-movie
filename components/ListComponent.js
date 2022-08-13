import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListComponent = ({ items, deleteItem }) => {
  function removeItem(id) {
    deleteItem(id)
  }

  return (
    <View style={styles.container}>
      {
        items.length > 0 ?
          items.map(item => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <TouchableOpacity style={styles.button} onPress={() => removeItem(item.id)}>
                <Text style={styles.buttonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )) :
          <View style={styles.noContent}>
            <Text style={styles.noContentText}>Adicione um filme para começar</Text>
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    width: '100%',
    height: 60,
    fontSize: 16,
    borderColor: '#989898',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8
  },
  itemTitle: {
    color: '#989898',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#989898',
    height: 25,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 12
  },
  noContentText: {
    fontSize: 20,
    color: '#989898',
    marginBottom: 50
  },

});

export { ListComponent }
