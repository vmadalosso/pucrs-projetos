import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Header } from '@/components/Header'
import { Loading } from '@/components/Loading'
import { colors } from '@/styles/colors'

// Interface para representar um álbum
interface Album {
  id: number
  title: string
}

export function User() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  // Função para buscar os álbuns do usuário com ID 1
  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums?userId=1',
      )
      const data = await response.json()
      setAlbums(data)
    } catch (error) {
      console.error('Erro ao buscar álbuns:', error)
      setError('Não foi possível carregar os álbuns. Tente novamente!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  // Função para renderizar cada álbum
  const renderAlbum = ({ item }: { item: Album }) => (
    <TouchableOpacity
      className="bg-gray-700 p-4 mb-2 rounded-md"
      onPress={() => router.push(`/album/${item.id}`)}
    >
      <View className="flex-row justify-between items-center">
        <Text className="text-white font-bold text-lg">{item.title}</Text>
        <MaterialCommunityIcons
          name="folder-image"
          size={22}
          color={colors.blue_dark}
        />
      </View>
    </TouchableOpacity>
  )

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-600">
        <Text className="text-red-400 text-center text-lg">{error}</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-gray-600">
      <Header />
      <View className="mt-10 pl-6">
        <Text className="text-blue_dark font-bold text-xl text-center mb-4 mt-4">
          Álbuns de Vitor
        </Text>
      </View>
      <FlatList
        data={albums}
        renderItem={renderAlbum}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  )
}
