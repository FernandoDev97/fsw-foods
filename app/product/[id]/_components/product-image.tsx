import Image from 'next/image'

import { ButtonBack } from '@/app/_components/button-back'

interface ProductImageProps {
  imageUrl: string
  name: string
}

export const ProductImage = ({ imageUrl, name }: ProductImageProps) => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-[332px] z-10">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority={true}
        />
        <ButtonBack />
      </div>
    </div>
  )
}
