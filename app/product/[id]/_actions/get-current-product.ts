import { prismaClient } from '@/app/_lib/prisma'

export const getCurrentProduct = async (params: string) => {
  const response = await prismaClient.product.findUnique({
    where: {
      id: params,
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

  const currentProduct = JSON.parse(JSON.stringify(response))

  return currentProduct
}
