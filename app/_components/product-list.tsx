import { Prisma } from '@prisma/client'

import { ProductItem } from './product-item'

interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true
        }
      }
    }
  }>[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex overflow-x-scroll gap-5 [&::-webkit-scrollbar]:hidden pr-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
