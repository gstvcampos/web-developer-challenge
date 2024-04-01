'use client'

import deletePost from '@/actions/deletePost'
import { DeleteIcon } from '../icons/DeleteIcon'

export default function DeleteBtn({ id }: { id: string }) {
  return (
    <button
      onClick={async () => await deletePost(id)}
      className="absolute cursor-pointer top-3 right-3"
    >
      <DeleteIcon />
    </button>
  )
}
