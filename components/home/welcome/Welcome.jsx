import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const movie_types = [
  "Action",
  "Comédie",
  "Drame",
  "Science-fiction",
  "Horreur",
  "Romance",
  "Aventure",
  "Animation",
  "Documentaire",
  "Fantastique",
  "Mystère",
  "Thriller",
  "Crime",
  "Western",
  "Guerre",
]


const Welcome = () => {
  const router = useRouter()
  const [active_movie_type, set_active_movie_type] = useState([])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Suka</Text>
        <Text style={styles.welcomeMessage}>Find your movie to watch</Text>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={movie_types}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(active_movie_type, item)}
            onPress={() => {
              set_active_movie_type(item)
            }}
            >
              <Text style={styles.tabText(active_movie_type, item)}>{item}</Text>
            </TouchableOpacity>
          )}
            keyExtractor={item => item}
            contentContainerStyle={{ columnGap: SIZES.small}}
            horizontal
        />
      </View>
    </View>
  )
}

export default Welcome