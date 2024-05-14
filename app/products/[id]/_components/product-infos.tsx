'use client'

import { Prisma } from '@prisma/client'
import { ArrowDownIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import {
  calculateProductTotalPrice,
  formatCurrency,
} from '@/app/_helpers/price'

interface ProductInfosProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true
    }
  }>
}

export const ProductInfos = ({ product }: ProductInfosProps) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <section className="p-5">
      <div className="space-y-2">
        <div className="flex items-center gap-1">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            width={0}
            height={0}
            className="w-6 h-6 rounded-full"
            sizes="100vh"
          />
          <span className="text-muted-foreground font-normal text-sm">
            {product.restaurant.name}
          </span>
        </div>
        <h1 className="text-xl font-semibold">{product.name}</h1>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="mt-3 flex flex-col">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-lg">
              R$ {formatCurrency(calculateProductTotalPrice(product))}
            </span>
            <Badge className="space-x-1 px-1 font-semibold">
              <ArrowDownIcon size={12} />
              <span>{product.discountPercentage} %</span>
            </Badge>
          </div>
          {product.discountPercentage > 0 && (
            <div>
              <span className="text-sm font-semibold text-gray-400">
                De: R${formatCurrency(Number(product.price))}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-gray-300 bg-transparent h-fit p-2"
          >
            <ChevronLeft />
          </Button>
          <span className="min-w-2">{quantity}</span>
          <Button className="border h-fit p-2">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
