import { ArrowDownIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { calculateProductTotalPrice, formatCurrency } from '../_helpers/price'
import { RelatedProductInfo } from '../_types'
import { Badge } from './ui/badge'

interface ProductItemProps {
  product: RelatedProductInfo
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="space-y-2 min-w-[150px] ">
        <div className="h-[150px] w-full relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="100vh"
          />
          {product.discountPercentage && (
            <div className="absolute top-2 left-2">
              <Badge className="flex items-center gap-[2px] px-2">
                <ArrowDownIcon size={12} />
                {product.discountPercentage}%
              </Badge>
            </div>
          )}
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
          <span className="text-sm text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
      </div>
    </Link>
  )
}
