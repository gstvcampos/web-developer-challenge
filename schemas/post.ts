import { z } from 'zod'

export const postSchema = z.object({
  id: z.string(),
  avatar: z.string().optional(),
  author: z.string().min(1, 'O nome do autor é obrigatório'),
  content: z.string().min(1, 'O conteúdo é obrigatório'),
})

export const createPostSchema = postSchema.omit({ id: true })
