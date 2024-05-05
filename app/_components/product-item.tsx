import { Product } from '@prisma/client'
import Image from 'next/image'

import { calculateProductTotalPrice, formatCurrency } from '../_helpers/price'

interface ProductItemProps {
  product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="space-y-2 min-w-[150px] ">
      <div className="h-[150px] w-full relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      <div>
        <h2 className="text-sm truncate">{product.name}</h2>
        <div className="flex gap-1 text-xs items-center">
          <h3 className="text-sm font-semibold">
            R$ {''}
            {formatCurrency(calculateProductTotalPrice(product))}
          </h3>
          <span className="text-muted-foreground line-through">
            {product.discountPercentage > 0 && (
              <>
                R$ {''}
                {formatCurrency(Number(product.price))}
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}