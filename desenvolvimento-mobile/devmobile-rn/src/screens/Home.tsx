import { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import { Header } from '@/components/Header'
import { Loading } from '@/components/Loading'

import { colors } from '@/styles/colors'

interface User {
  id: number
  name: string
  username: string
}

export function Home() {
  const [users, setUsers] = useState<User[]>([]) // Estado para armazenar os usuários
  const [loadUsers, setLoading] = useState<boolean>(true) // Estado para controlar o carregamento
  const [error, setError] = useState<string | null>(null) // Estado para erros
  const [searchQuery, setSearchQuery] = useState<string>('') // Estado para a pesquisa

  const router = useRouter() // Usando o useRouter para navegação

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
      setError('Não foi possível carregar os usuários. Tente novamente!')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loadUsers) {
    return <Loading />
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-600">
        <Text className="text-white">{error}</Text>
      </View>
    )
  }

  // Filtra os usuários com base no nome
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      className="bg-gray-700 p-4 mb-2 rounded-md"
      onPress={() => router.push(`/albums/${item.id}`)}
    >
      <View className="flex-row justify-between items-center">
        <Text className="text-white font-bold text-lg">{item.name}</Text>
        <MaterialCommunityIcons
          name="account-box-outline"
          size={22}
          color={colors.blue_dark}
        />
      </View>
    </TouchableOpacity>
  )

  return (
    <View className="flex-1 justify-center bg-gray-600">
      <Header setSearchQuery={setSearchQuery} />
      <View className="mt-10">
        <Text className="text-blue_dark font-bold text-xl text-center mb-4 mt-4">
          Selecione um usuário:
        </Text>
        <FlatList
          data={filteredUsers} // Usa os usuários filtrados
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 16 }}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
        />
      </View>
    </View>
  )
}
