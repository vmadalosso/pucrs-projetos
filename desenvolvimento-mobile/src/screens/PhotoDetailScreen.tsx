import React from 'react'
import { View, Text, Image } from 'react-native'
import { PhotoDetailScreenProps } from '@/@types/navigation' // Importando o tipo correto

export function PhotoDetailScreen({ route }: PhotoDetailScreenProps) {
  const { photoUrl } = route.params

  return (
    <View className="flex-1 justify-center items-center p-4 bg-gray-900">
      <Text className="text-white text-2xl font-bold mb-5">Foto Detalhada</Text>
      <Image
        className="w-full h-96 rounded-lg"
        alt="Imagem"
        source={{ uri: photoUrl }}
      />
    </View>
  )
}
