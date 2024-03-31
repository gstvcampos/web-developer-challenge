import Image from 'next/image'
import { useState } from 'react'
import { ImagePlaceholderIcon } from '../icons/ImagePlaceholderIcon'
import { TrashIcon } from '../icons/TrashIcon'

export default function InputImage({
  getFile,
}: {
  getFile: (file: File | null) => void
}) {
  const [file, setFile] = useState<File | null>(null)

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
        setFile(newFile)
        getFile(newFile)
      }
    }
  }

  return (
    <div className="flex items-center gap-4 pb-3">
      <label className="flex cursor-pointer flex-col w-[88px] h-[88px] rounded-[36px] hover:bg-base-200 border border-[#4b4b4b] relative overflow-hidden items-center justify-center">
        {file ? (
          <Image
            alt=""
            fill
            objectFit="cover"
            src={URL.createObjectURL(file)}
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
      {file && (
        <button type="button" onClick={() => setFile(null)}>
          <TrashIcon />
        </button>
      )}
    </div>
  )
}
