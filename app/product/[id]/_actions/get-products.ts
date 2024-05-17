import { prismaClient } from '@/app/_lib/prisma'

export const getProducts = async (categoryId: string, restaurantId: string) => {
  const response = await prismaClient.product.findMany({
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

  const product = JSON.parse(JSON.stringify(response))

  return product
}
