import { notFound } from 'next/navigation'

import { prismaClient } from '@/app/_lib/prisma'

import { ProductImage } from './_components/product-image'
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
    <>
      <ProductImage product={currentProduct} />
      <ProductInfos product={currentProduct} />
    </>
  )
}

export default ProductPage
