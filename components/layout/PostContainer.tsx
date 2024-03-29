import { Post } from '@prisma/client'

export default function PostContainer({ post }: { post: Post }) {
  return (
    <div>
      <h3>{post.author}</h3>
      <p>{post.content}</p>
    </div>
  )
}
