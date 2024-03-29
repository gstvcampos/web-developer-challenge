'use server'

import { prisma } from '@/db/prisma'
import { revalidatePath } from 'next/cache'

export default async function createPost(data) {
  await prisma.post.create({ data })

  revalidatePath('/')
  return { success: 'Post criado com sucesso' }
}
