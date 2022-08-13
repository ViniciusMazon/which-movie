import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListComponent } from './components/ListComponent'
import { AddItemComponent } from './components/AddItemComponent'
import { ShowSortedItemComponent } from './components/ShowSortedItem'
import AsyncStorage from '@react-native-async-storage/async-storage';;

export default function App() {
  const [movies, setMovies] = useState([])
  const [isAddingMovie, setIsAddingMovie] = useState(false)
  const [isShowingSortedItemView, setIsShowingSortedItemView] = useState(false)
  const [sortedItem, setSortedItem] = useState({})

  useEffect(() => {
    const getMovies = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@movies')
        console.log(jsonValue)
        jsonValue !== null ? setMovies(JSON.parse(jsonValue)) : setMovies([])
      } catch (error) {
        console.error(error)
      }
    }
    getMovies()
  }, [])

  function sortMovie() {
    const max = movies.length
    const min = 0
    const randomIndex = Math.floor(Math.random() * (max - min) + min)
    const sortedMovie = movies[randomIndex]
    setSortedItem(sortedMovie)
    setIsShowingSortedItemView(true)
  }

  async function deleteMovie(id) {
    const newMoviesArray = movies.filter(movie => movie.id !== id)
    setMovies(newMoviesArray)
    await persist(newMoviesArray)
  }

  async function addMovie(movie) {
    const newMovies = [...movies, movie]
    setMovies(newMovies)
    await persist(newMovies)
  }

  async function persist(data) {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@movies', jsonValue)
    } catch (error) {
      console.error(error)
    }
  }

  function toggleAddMovieView() {
    setIsAddingMovie(!isAddingMovie)
  }

  function toggleSortedItemView() {
    setIsShowingSortedItemView(!isShowingSortedItemView)
  }

  return (
    <View style={styles.container}>
      {
        isShowingSortedItemView ?
          <ShowSortedItemComponent item={sortedItem} handleClose={toggleSortedItemView} /> :
          <>
            <ListComponent items={movies} deleteItem={deleteMovie} />
            {
              isAddingMovie ? <AddItemComponent style={styles.positionBottom} addItem={addMovie} handleClose={toggleAddMovieView} /> : (
                <>
                  {
                    movies.length > 0 &&
                    <TouchableOpacity style={styles.button} onPress={sortMovie}>
                      <Text style={styles.buttonText}>Qual filme?</Text>
                    </TouchableOpacity>
                  }

                  <TouchableOpacity style={styles.buttonOutline} onPress={toggleAddMovieView}>
                    <Text style={styles.buttonOutlineText}>Adicionar filme</Text>
                  </TouchableOpacity>
                </>
              )
            }
          </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7eff5'
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonOutline: {
    width: '90%',
    height: 60,
    borderColor: '#00bfff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginBottom: 15
  },
  buttonOutlineText: {
    color: '#00bfff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
