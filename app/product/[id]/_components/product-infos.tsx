'use client'

import { ArrowDownIcon, Bike, Minus, Plus, TimerIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { ProductList } from '@/app/_components/product-list'
import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import {
  calculateProductTotalPrice,
  formatCurrency,
} from '@/app/_helpers/price'

import { ProductInfo, RelatedProductInfo } from '../../../_types'

export interface ProductInfosTypes {
  product: ProductInfo
  productsInSameCategoryAndRestaurant: RelatedProductInfo[]
}

export const ProductInfos = ({
  product,
  productsInSameCategoryAndRestaurant,
}: ProductInfosTypes) => {
  const [quantity, setQuantity] = useState(1)

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) return
    setQuantity((state) => state - 1)
  }

  const handleIncreaseQuantity = () => {
    setQuantity((state) => state + 1)
  }

  if (!product) {
    return
  }

  return (
    <section className="py-5 relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white">
      <div className="space-y-2 px-5">
        <div className="flex items-center gap-1">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            width={0}
            height={0}
            className="w-6 h-6 rounded-full"
            sizes="100vh"
          />
          <Link
            href={`/restaurant/${product.restaurant.id}`}
            className="text-muted-foreground font-normal text-sm hover:underline"
          >
            {product.restaurant.name}
          </Link>
        </div>
        <h1 className="text-xl font-semibold">{product.name}</h1>
      </div>
      <div className="w-full flex px-5 justify-between items-center">
        <div className="mt-3 flex flex-col">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-lg">
              R$ {formatCurrency(calculateProductTotalPrice(product))}
            </span>
            {product.discountPercentage > 0 && (
              <Badge className="space-x-1 px-1 font-semibold">
                <ArrowDownIcon size={12} />
                <span>{product.discountPercentage} %</span>
              </Badge>
            )}
          </div>
          {product.discountPercentage > 0 && (
            <div>
              <span className="text-sm font-semibold text-gray-400">
                De: R${formatCurrency(Number(product.price))}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center ">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 bg-transparent h-fit p-2"
            onClick={handleDecreaseQuantity}
          >
            <Minus size={22} />
          </Button>
          <span className="w-[1.75rem] text-center text-sm">{quantity}</span>
          <Button
            onClick={handleIncreaseQuantity}
            size="icon"
            className="border h-fit p-2"
          >
            <Plus size={22} />
          </Button>
        </div>
      </div>
      <div className="px-5">
        <Card className="mt-8 rounded-md">
          <CardContent className="w-full flex justify-around items-center h-fit py-5">
            <div className="flex justify-center flex-col items-center">
              <span className="flex text-gray-400 items-center gap-1">
                Entrega
                <Bike size={20} />
              </span>
              <span className="font-bold">
                {Number(product.restaurant.deliveryFee) > 0
                  ? `R$ ${formatCurrency(Number(product.restaurant.deliveryFee))}`
                  : 'Grátis'}
              </span>
            </div>

            <div className="flex justify-center flex-col items-center">
              <span className="flex text-gray-400 items-center gap-1">
                Entrega
                <TimerIcon size={20} />
              </span>
              <span className="font-bold">
                {product.restaurant.deliveryTimeMinutes} min
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 px-5">
        <h3 className="font-semibold text-xl">Sobre</h3>
        <p className="text-gray-500 mt-3 text-base">{product.description}</p>
      </div>

      <div className="mt-8 space-y-3 pl-5">
        <h3 className="font-semibold text-xl">Outros Produtos</h3>
        <ProductList products={productsInSameCategoryAndRestaurant} />
      </div>

      <div className="mt-8 w-full px-4">
        <Button className="w-full p-0 h-fit py-3 font-semibold text-base">
          Adicionar à Sacola
        </Button>
      </div>
    </section>
  )
}
