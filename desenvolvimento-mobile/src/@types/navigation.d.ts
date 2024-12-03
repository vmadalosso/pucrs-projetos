import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Albums: { userId: number }
  Photos: { albumId: number }
  PhotoDetail: { photoUrl: string }
}

// Tipos de navegação para telas específicas
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>

export type AlbumsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Albums'
>

export type PhotosScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Photos'
>

export type PhotoDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PhotoDetail'
>

// Tipos de props para as telas
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type AlbumsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Albums'
>
export type PhotosScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Photos'
>
export type PhotoDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PhotoDetail'
>
