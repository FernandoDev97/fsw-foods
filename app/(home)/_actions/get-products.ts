import { prismaClient } from '@/app/_lib/prisma'

export const getProducts = async () => {
  const response = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  })
  const products = JSON.parse(JSON.stringify(response))

  return products
}
