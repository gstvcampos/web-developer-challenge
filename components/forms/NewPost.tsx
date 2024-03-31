'use client'

import { CreatePost } from '@/@types/post'
import createPost from '@/actions/createPost'
import { createPostSchema } from '@/schemas/post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/Input'
import InputImage from '../ui/InputImg'
import { Textarea } from '../ui/Textare'

export default function NewPost() {
  const [isPending, startTransition] = useTransition()
  const [avatar, setAvatar] = useState<File | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
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

  const handleResete = () => {
    setAvatar(null)
    reset()
  }

  return (
    <form
      className="flex flex-col items-center bg-accent border border-[#3b3b3b] rounded-[3px] p-6"
      onSubmit={handleSubmit(handleCreatePost)}
    >
      <InputImage
        avatar={avatar}
        setAvatar={setAvatar}
        {...register('avatar')}
      />
      <Input
        {...register('author')}
        placeholder="Digite seu nome"
        error={errors.author}
      />
      <Textarea
        className="h-20 text-area"
        {...register('content')}
        placeholder="Mensagem"
        error={errors.content}
      />
      <div className="pt-7 self-end">
        <button
          type="button"
          className="btn btn-ghost underline"
          onClick={handleResete}
          disabled={!isDirty || isPending || !avatar}
        >
          Descartar
        </button>
        <button
          type="submit"
          className="bg-primary btn"
          disabled={!isValid || isPending}
        >
          Publicar
        </button>
      </div>
    </form>
  )
}
