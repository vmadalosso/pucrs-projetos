import { View, Image, TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import logoImage from '@/assets/logo.png'
import { colors } from '@/styles/colors'

interface HeaderProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export function Header({ setSearchQuery }: HeaderProps) {
  return (
    <View className="bg-gray-700 w-full mt-16 h-60 justify-center items-center relative">
      {/* Logo */}
      <Image source={logoImage} alt="Logo" className="mb-4" />

      {/* Campo de busca */}
      <View className="flex-row items-center justify-between w-3/4">
        <TextInput
          className="h-14 flex-1 bg-gray-500 rounded-md p-4 font-normal border border-gray-700 text-gray-100 focus:border-purple"
          placeholder="Buscar usuário"
          placeholderTextColor={colors.gray[300]}
          onChangeText={setSearchQuery} // Atualiza a busca
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
  )
}
