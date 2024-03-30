'use client'

import { CreatePost } from '@/@types/post'
import createPost from '@/actions/createPost'
import { createPostSchema } from '@/schemas/post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

export default function NewPost() {
  const [isPending, startTransition] = useTransition()
  const { register, handleSubmit, reset } = useForm<CreatePost>({
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
      <input
        className="input bg-base-200"
        type="text"
        {...register('author', { required: true })}
      />
      <input
        className="input bg-base-200"
        type="text"
        {...register('content', { required: true })}
      />
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
