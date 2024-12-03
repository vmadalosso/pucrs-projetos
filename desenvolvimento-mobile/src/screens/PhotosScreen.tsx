import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { PhotosScreenProps } from '@/@types/navigation' // Importando o tipo correto

export interface Photo {
  id: number
  title: string
  url: string
}

// Tipando as props da tela com o tipo correto
export function PhotosScreen({ route, navigation }: PhotosScreenProps) {
  const { albumId } = route.params
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
        )
        const data = await response.json()
        setPhotos(data)
      } catch (error) {
        console.error('Erro ao buscar fotos:', error)
      }
    }

    fetchPhotos()
  }, [albumId])

  return (
    <View className="flex-1 bg-gray-800">
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="border-gray-700 bg-gray-500 rounded-lg mb-4 p-4 shadow"
            onPress={() =>
              navigation.navigate('PhotoDetail', { photoUrl: item.url })
            }
          >
            <Image
              className="w-full h-48 rounded-lg mb-4"
              alt="Imagem"
              source={{ uri: item.url }}
            />
            <Text className="text-white text-lg font-semibold">
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
