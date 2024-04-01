'use client'

import deletePost from '@/actions/deletePost'
import { startTransition } from 'react'
import { toast } from 'sonner'
import { DeleteIcon } from '../icons/DeleteIcon'

export default function DeleteBtn({ id }: { id: string }) {
  function handelDelete() {
    startTransition(() => {
      deletePost(id)
        .then((data) => {
          if (data?.success) {
            toast(data.success)
          }
        })
        .catch(() => toast('Erro ao deletar postagem'))
    })
  }

  return (
    <button
      onClick={handelDelete}
      className="absolute cursor-pointer top-3 right-3"
    >
      <DeleteIcon />
    </button>
  )
}
