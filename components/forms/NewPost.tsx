'use client'

import { CreatePost } from '@/@types/post'
import createPost from '@/actions/createPost'
import { createPostSchema } from '@/schemas/post'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { Input } from '../ui/Input'
import { InputImage } from '../ui/InputImg'
import { Textarea } from '../ui/Textare'

export default function NewPost() {
  const [isPending, startTransition] = useTransition()
  const [avatar, setAvatar] = useState<File | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreatePost>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      author: '',
      content: '',
    },
  })

  const onSubmit = (values: CreatePost) => {
    const formData = new FormData()
    for (const key in values) {
      formData.append(key, values[key as keyof CreatePost])
    }

    if (avatar) {
      formData.append('avatar', avatar)
    }

    startTransition(() => {
      createPost(formData)
        .then((data) => {
          if (data?.error) {
            toast(data.error)
          }
          if (data?.success) {
            reset()
            toast(data.success)
          }
        })
        .catch(() => toast('Erro ao criar post'))
    })
  }

  const handleResete = () => {
    setAvatar(null)
    reset()
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0]

    if (newFile) {
      const fileType = newFile.type
      const validImageTypes = [
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/webp',
      ]
      if (validImageTypes.includes(fileType)) {
        setAvatar(newFile)
      }
    }
    e.target.value = ''
  }

  return (
    <form
      className="flex flex-col items-center bg-accent border border-[#3b3b3b] rounded-[3px] p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputImage avatar={avatar} setAvatar={setAvatar} onChange={handleFile} />
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
      <div className="pt-7 self-end space-x-8">
        <button
          type="button"
          className="underline text-neutral text-sm hover:text-primary-content"
          onClick={handleResete}
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
      <Toaster />
    </form>
  )
}
