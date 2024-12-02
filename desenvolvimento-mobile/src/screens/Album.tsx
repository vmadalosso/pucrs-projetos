import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { Header } from '@/components/Header'
import { colors } from '@/styles/colors'

// Dados estáticos de um álbum
const albumTitle = 'Quidem Molestiae Enim'
const photosData = [
  {
    id: 1,
    title: 'Photo 1',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    url: 'https://via.placeholder.com/600/92c952',
  },
  {
    id: 2,
    title: 'Photo 2',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
    url: 'https://via.placeholder.com/600/771796',
  },
  {
    id: 3,
    title: 'Photo 3',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    url: 'https://via.placeholder.com/600/24f355',
  },
  {
    id: 4,
    title: 'Photo 4',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    url: 'https://via.placeholder.com/600/d32776',
  },
  {
    id: 5,
    title: 'Photo 5',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    url: 'https://via.placeholder.com/600/f66b97',
  },
]

// Função para renderizar cada foto
const renderPhoto = ({
  item,
}: {
  item: { id: number; title: string; thumbnailUrl: string; url: string }
}) => (
  <TouchableOpacity
    key={item.id}
    className="bg-gray-700 p-4 mb-2 rounded-md"
    onPress={() => alert(`Foto: ${item.title}`)} // Simulação do clique na foto
  >
    <View className="flex-row items-center">
      <Image
        source={{ uri: item.thumbnailUrl }}
        alt="thumb"
        className="w-20 h-20 rounded-md"
        style={{ marginRight: 16 }}
      />
      <Text className="text-white font-bold text-lg">{item.title}</Text>
    </View>
  </TouchableOpacity>
)

export function Album() {
  return (
    <View className="flex-1 bg-gray-600">
      <Header />
      <View className="mt-10 px-6">
        <Text className="text-blue_dark font-bold text-xl text-center mb-4">
          {albumTitle}
        </Text>
        <FlatList
          data={photosData}
          renderItem={renderPhoto}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </View>
    </View>
  )
}
