import { Post } from '@prisma/client'

export default function PostContainer({ post }: { post: Post }) {
  return (
    <div className="flex flex-cpl sm:flex-row ">
      <div>
        <h2>{post.author}</h2>
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
