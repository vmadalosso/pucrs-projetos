import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { getPosts, Post } from '@/services/api'

interface DetailsScreenProps {
  route: { params: { postId: number } }
}

export function DetailsScreen({ route }: DetailsScreenProps) {
  const { postId } = route.params
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getPosts()
      const selectedPost = posts.find((p) => p.id === postId)
      setPost(selectedPost || null)
    }

    fetchPost()
  }, [postId])

  if (!post) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-800">
        <Text className="text-white text-lg">Carregando...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 p-4 bg-gray-800">
      <Text className="text-blue-400 font-bold text-xl mb-4">{post.title}</Text>
      <Text className="text-white text-base">{post.body}</Text>
    </View>
  )
}
