import { Post } from '@prisma/client'
import Image from 'next/image'
import DeleteBtn from '../buttons/DeleteBtn'
import { ImagePlaceholderIcon } from '../icons/ImagePlaceholderIcon'

export default async function PostContainer({ post }: { post: Post }) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center bg-accent border border-[#3b3b3b] rounded-[3px] px-6 pt-14 pb-8 gap-8 mb-4">
      <DeleteBtn id={post.id} />
      <div>
        <div className="flex cursor-pointer flex-col w-[88px] h-[88px] rounded-[36px] hover:bg-base-200 border border-[#4b4b4b] relative overflow-hidden items-center justify-center">
          {post.avatar ? (
            <Image alt="" fill objectFit="cover" src={post.avatar} />
          ) : (
            <ImagePlaceholderIcon />
          )}
        </div>
      </div>
      <div>
        <p className="pb-6 text-accent-content">{post.content}</p>
        <div className="flex flex-col">
          <p className="text-xs text-neutral">Enviado por</p>
          <p className="text-sm text-info">{post.author}</p>
        </div>
      </div>
    </div>
  )
}
