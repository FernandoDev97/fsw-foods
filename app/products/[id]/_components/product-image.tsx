import { Product } from '@prisma/client'
import Image from 'next/image'

import { ButtonBack } from '@/app/_components/button-back'

interface ProductImageProps {
  product: Pick<Product, 'name' | 'imageUrl'>
}

export const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-[332px]">
        <Image
          src={product?.imageUrl}
          alt={product?.name}
          fill
          className="object-cover"
        />
        <ButtonBack />
      </div>
    </div>
  )
}
