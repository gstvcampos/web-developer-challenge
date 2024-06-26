import NewPost from '@/components/forms/NewPost'
import PostContainer from '@/components/layout/PostContainer'
import { prisma } from '@/db/prisma'

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="mx-auto w-full max-w-[34.25rem] px-2 py-12 space-y-14">
      <NewPost />
      <div>
        <h4 className="text-sm pb-2 text-info">Feed</h4>
        {posts &&
          posts.map((post) => <PostContainer key={post.id} post={post} />)}
      </div>
    </div>
  )
}
