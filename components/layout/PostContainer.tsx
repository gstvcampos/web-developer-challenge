import { Post } from '@prisma/client'
import { DeleteIcon } from '../icons/DeleteIcon'

export default function PostContainer({ post }: { post: Post }) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center bg-accent border border-[#3b3b3b] rounded-[3px] px-6 pt-14 pb-8 gap-8">
      <button className="absolute top-3 right-3">
        <DeleteIcon />
      </button>
      <div>
        <h2>asdas{post.author}</h2>
      </div>
      <div>
        <p>{post.content}</p>
        <div className="flex flex-col">
          <span>Enviado por</span>
          <span>{post.author}</span>
        </div>
      </div>
    </div>
  )
}
