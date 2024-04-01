'use server'

import { prisma } from '@/db/prisma'
import { revalidatePath } from 'next/cache'

export default async function deletePost(id) {
  console.log('Deleting post with id:', id)
  await prisma.post.delete({ where: { id } })

  revalidatePath('/')
  return { success: 'Post deleteado com sucesso' }
}
