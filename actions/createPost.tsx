'use server'

import { uploadImage } from '@/db/cloudinary'
import { prisma } from '@/db/prisma'
import { revalidatePath } from 'next/cache'

export default async function createPost(formData: FormData) {
  const avatar = formData.get('avatar') as File
  const author = formData.get('author')?.toString()
  const content = formData.get('content')?.toString()
  let imageUrl: string | undefined

  if (!author || !content) {
    return { error: 'Autor e conteudo é obrigatorio' }
  }

  if (avatar) {
    imageUrl = await uploadImage(avatar, author)
  }

  await prisma.post.create({
    data: {
      author,
      content,
      avatar: imageUrl,
    },
  })

  revalidatePath('/')
  return { success: 'Postagem criado com sucesso' }
}
