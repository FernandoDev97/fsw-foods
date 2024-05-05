import { prismaClient } from '../_lib/prisma'
import { ProductItem } from './product-item'

export const ProductList = async () => {
  const products = await prismaClient.product.findMany({
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
  return (
    <div className="flex overflow-x-scroll gap-5 [&::-webkit-scrollbar]:hidden pr-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
