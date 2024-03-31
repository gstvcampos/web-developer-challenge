import Image from 'next/image'
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { ImagePlaceholderIcon } from '../icons/ImagePlaceholderIcon'
import { TrashIcon } from '../icons/TrashIcon'

interface InputImageProps extends InputHTMLAttributes<HTMLInputElement> {
  setAvatar: (file: File | null) => void
  avatar: File | null
}

export const InputImage = forwardRef(
  (
    { setAvatar, avatar, ...rest }: InputImageProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="flex items-center gap-4 pb-3">
        <label className="flex cursor-pointer flex-col w-[88px] h-[88px] rounded-[36px] hover:bg-base-200 border border-[#4b4b4b] relative overflow-hidden items-center justify-center">
          {avatar ? (
            <Image
              alt=""
              fill
              objectFit="cover"
              src={URL.createObjectURL(avatar)}
            />
          ) : (
            <ImagePlaceholderIcon />
          )}
          <input type="file" className="hidden" ref={ref} {...rest} />
        </label>
        {avatar && (
          <button type="button" onClick={() => setAvatar(null)}>
            <TrashIcon />
          </button>
        )}
      </div>
    )
  },
)

InputImage.displayName = 'InputImage'
