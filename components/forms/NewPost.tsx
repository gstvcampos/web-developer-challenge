'use client'

import { CreatePost } from '@/@types/post'
import createPost from '@/actions/createPost'
import { createPostSchema } from '@/schemas/post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/Input'

export default function NewPost() {
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePost>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      author: '',
      content: '',
    },
  })

  const handleCreatePost = (values: CreatePost) => {
    startTransition(() => {
      createPost(values)
    })
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleCreatePost)}>
      <Input {...register('author')} error={errors.author} />
      <Input {...register('content')} error={errors.content} />
      <div>
        <button
          type="button"
          className="btn btn-ghost underline"
          onClick={() => reset()}
        >
          Descartar
        </button>
        <button type="submit" className="bg-primary btn" disabled={isPending}>
          Publicar
        </button>
      </div>
    </form>
  )
}
