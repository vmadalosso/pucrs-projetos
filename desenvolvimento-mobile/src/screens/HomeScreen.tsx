import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Loading } from '@/components/Loading'
import { RootStackParamList } from '@/@types/navigation' // Importa o tipo RootStackParamList

import { colors } from '@/styles/colors'

export interface User {
  id: number
  name: string
}

export function HomeScreen() {
  const [users, setUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [usersLoaded, setUsersLoaded] = useState(false) // Estado para verificar se os usuários foram carregados

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>() // Tipando a navegação para a tela Home

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        )
        const data = await response.json()
        setUsers(data)
        setUsersLoaded(true) // Marca como carregado
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
        setUsersLoaded(true) // Marca como carregado mesmo que haja erro (para não travar a UI)
      }
    }
    fetchUsers()
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <View className="flex-1 p-4 bg-gray-800">
      {/* Campo de pesquisa */}
      <View className="bg-gray-700 rounded-md items-center justify-center w-full h-20 relative mb-10">
        <View className="h-14 w-full flex-row items-center justify-center absolute">
          <TextInput
            className="h-14 w-3/4 bg-gray-500 rounded-md p-4 font-normal border border-gray-700 mr-1 text-gray-100"
            placeholder="Buscar usuário"
            placeholderTextColor={colors.gray[300]}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            className="h-14 w-14 rounded-md bg-blue_dark items-center justify-center"
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name="account-search-outline"
              size={22}
              color={colors.gray[100]}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Exibir carregando se os dados ainda não foram carregados */}
      {usersLoaded ? (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-gray-700 p-4 mb-2 rounded-md"
              onPress={() => navigation.navigate('Albums', { userId: item.id })} // Usando a navegação tipada
            >
              <View className="flex-row justify-between items-center">
                <Text className="text-white font-bold text-lg">
                  {item.name}
                </Text>
                <MaterialCommunityIcons
                  name="account-box-outline"
                  size={24}
                  color={colors.blue_dark}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Loading /> // Símbolo de carregamento
      )}
    </View>
  )
}
