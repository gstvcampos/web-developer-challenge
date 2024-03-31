import Image from 'next/image'
import { ImagePlaceholderIcon } from '../icons/ImagePlaceholderIcon'
import { TrashIcon } from '../icons/TrashIcon'

export default function InputImage({
  setAvatar,
  avatar,
}: {
  setAvatar: (file: File | null) => void
  avatar: File | null
}) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0]

    if (newFile) {
      const fileType = newFile.type
      const validImageTypes = [
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/webp',
      ]
      if (validImageTypes.includes(fileType)) {
        setAvatar(newFile)
      }
    }
  }

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
        <input
          type="file"
          onChange={handleFile}
          className="hidden"
          name="file"
        />
      </label>
      {avatar && (
        <button type="button" onClick={() => setAvatar(null)}>
          <TrashIcon />
        </button>
      )}
    </div>
  )
}
