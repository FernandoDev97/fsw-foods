import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ButtonBack } from '@/app/_components/button-back'
import { prismaClient } from '@/app/_lib/prisma'

import { ProductInfos } from './_components/product-infos'

interface ProductPageProps {
  params: {
    id: string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const currentProduct = await prismaClient.product.findUnique({
    where: {
      id: params.id,
    },
    include: {
      restaurant: true,
    },
  })

  if (!currentProduct) {
    return notFound()
  }
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-[332px]">
        <Image
          src={currentProduct?.imageUrl}
          alt={currentProduct?.name}
          fill
          className="object-cover"
        />
        <ButtonBack />
      </div>
      <section className="p-5">
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <Image
              src={currentProduct.restaurant.imageUrl}
              alt={currentProduct.restaurant.name}
              width={0}
              height={0}
              className="w-6 h-6 rounded-full"
              sizes="100vh"
            />
            <span className="text-muted-foreground font-normal text-sm">
              {currentProduct.restaurant.name}
            </span>
          </div>
          <h1 className="text-xl font-semibold">{currentProduct.name}</h1>
        </div>
        <div className="mt-3">
          <ProductInfos />
        </div>
      </section>
    </div>
  )
}

export default ProductPage
