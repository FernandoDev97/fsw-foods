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
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      imageUrl: true,
      categoryId: true,
      discountPercentage: true,
      restaurantId: true,
      restaurant: {
        select: {
          id: true,
          name: true,
          imageUrl: true,
          deliveryFee: true,
          deliveryTimeMinutes: true,
        },
      },
    },
  })

  const categoryId = currentProduct?.categoryId
  const restaurantId = currentProduct?.restaurantId

  const productsInSameCategoryAndRestaurant =
    await prismaClient.product.findMany({
      where: {
        categoryId,
        restaurantId,
      },
      include: {
        restaurant: {
          select: {
            name: true,
          },
        },
      },
    })

  if (!currentProduct) {
    return notFound()
  }
  return (
    <>
      <ProductImage
        imageUrl={currentProduct.imageUrl}
        name={currentProduct.name}
      />
      <ProductInfos
        productsInSameCategoryAndRestaurant={
          productsInSameCategoryAndRestaurant
        }
        product={currentProduct}
      />
    </>
  )
}

export default ProductPage
