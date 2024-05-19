import Image from 'next/image'

import { ButtonBack } from '@/app/_components/button-back'

interface RestaurantImageProps {
  imageUrl: string
  alt: string
}

export const RestaurantImage = ({ imageUrl, alt }: RestaurantImageProps) => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-[250px]">
        <Image src={imageUrl} alt={alt} fill className="object-cover" />
        <ButtonBack />
      </div>
    </div>
  )
}
