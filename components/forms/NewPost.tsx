'use client'

import { CreatePost } from '@/@types/post'
import createPost from '@/actions/createPost'
import { createPostSchema } from '@/schemas/post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/Input'
import InputImage from '../ui/InputImg'

export default function NewPost() {
  const [isPending, startTransition] = useTransition()
  const [avatar, setAvatar] = useState<File | null>(null)
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

  function getFile(file: File | null) {
    setAvatar(file)
  }

  const handleCreatePost = (values: CreatePost) => {
    startTransition(() => {
      createPost(values)
    })
  }

  return (
    <form
      className="flex flex-col items-center bg-accent border border-[#3b3b3b] rounded-[3px]"
      onSubmit={handleSubmit(handleCreatePost)}
    >
      <InputImage getFile={getFile} {...register('avatar')} />
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
