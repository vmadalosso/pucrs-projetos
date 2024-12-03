import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from '@/@types/navigation'
import { colors } from '@/styles/colors'

export interface Album {
  id: number
  title: string
}

export function AlbumsScreen() {
  const route = useRoute()
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Albums'>>() // Correção aqui

  const { userId } = route.params as { userId: number }
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
        )
        const data = await response.json()
        setAlbums(data)
      } catch (error) {
        console.error('Erro ao buscar álbuns:', error)
      }
    }

    fetchAlbums()
  }, [userId])

  return (
    <View className="flex-1 p-4 bg-gray-800">
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-gray-700 p-4 mb-2 rounded-md flex-row justify-between items-center"
            onPress={() => navigation.navigate('Photos', { albumId: item.id })}
          >
            <Text className="text-white font-bold text-lg">{item.title}</Text>
            <MaterialCommunityIcons
              name="image-outline"
              size={24}
              color={colors.blue_dark}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
