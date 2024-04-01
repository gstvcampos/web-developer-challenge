'use client'

import { cn } from '@/lib/ultis'
import Image from 'next/image'
import { InputHTMLAttributes, forwardRef } from 'react'
import { ImagePlaceholderIcon } from '../icons/ImagePlaceholderIcon'
import { TrashIcon } from '../icons/TrashIcon'

interface InputImageProps extends InputHTMLAttributes<HTMLInputElement> {
  setAvatar: (file: File | null) => void
  avatar: File | null
}

export const InputImage = forwardRef<HTMLInputElement, InputImageProps>(
  ({ setAvatar, avatar, ...rest }, ref) => {
    const handleRemove = () => {
      setAvatar(null)
    }

    return (
      <div className="flex items-center gap-4 pb-3">
        <label
          className={cn(
            'flex cursor-pointer flex-col w-[88px] h-[88px] rounded-[36px] hover:bg-base-200 border-[#4b4b4b] relative overflow-hidden items-center justify-center',
            !avatar && 'border',
          )}
        >
          {avatar ? (
            <Image
              alt="avatar do autor"
              fill
              className="object-cover"
              src={URL.createObjectURL(avatar)}
            />
          ) : (
            <ImagePlaceholderIcon />
          )}
          <input type="file" className="hidden" ref={ref} {...rest} />
        </label>
        {avatar && (
          <button type="button" onClick={handleRemove}>
            <TrashIcon />
          </button>
        )}
      </div>
    )
  },
)

InputImage.displayName = 'InputImage'
