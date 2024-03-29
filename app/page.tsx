import PostContainer from '@/components/PostContainer'
import NewPost from '@/components/forms/NewPost'
import { prisma } from '@/db/prisma'

export default async function Home() {
  const posts = await prisma.post.findMany()

  return (
    <div>
      <NewPost />
      {posts && posts.map((post) => <PostContainer key={post.id} />)}
    </div>
  )
}
