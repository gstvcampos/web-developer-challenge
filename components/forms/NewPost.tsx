'use client'

import createPost from '@/actions/createPost'
import { useForm } from 'react-hook-form'

export default function NewPost() {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onChange',
  })

  const onSubmit = async (data) => {
    console.log(data)
    createPost(data)
    reset()
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
        <button
          type="submit"
          className="bg-primary btn"
          disabled={formState.isLoading}
        >
          Publicar
        </button>
      </div>
    </form>
  )
}
