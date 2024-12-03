import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export interface Post {
  id: number
  title: string
  body: string
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get<Post[]>('/posts')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return []
  }
}
