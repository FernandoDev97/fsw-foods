import { Trash } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet'
import {
  calculateProductTotalPrice,
  formatCurrency,
} from '@/app/_helpers/price'

import { ButtonsQuantityProduct } from './buttons-quantity-product'
import { ProductInfosTypes } from './product-infos'

export const BagProducts = ({ product }: ProductInfosTypes) => {
  function calculateDiscount(
    price: number,
    percentageDiscount: number,
  ): number {
    const discount = price * (percentageDiscount / 100)
    return discount
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full p-0 h-fit py-3 font-semibold text-base">
          Adicionar à Sacola
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-left mt-3 text-lg font-semibold">
            Sacola
          </SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex gap-4 h-[6rem]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={0}
            height={0}
            className="object-cover w-[100px] h-full rounded-md"
            sizes="100vh"
          />

          <div className="flex flex-col gap-1">
            <span className="text-sm">{product.name}</span>

            <div className="flex items-center gap-1">
              <span className="font-semibold text-base">
                R$ {formatCurrency(calculateProductTotalPrice(product))}
              </span>

              {product.discountPercentage > 0 && (
                <div>
                  <span className="text-sm font-semibold text-gray-400">
                    R${formatCurrency(Number(product.price))}
                  </span>
                </div>
              )}
            </div>

            <ButtonsQuantityProduct className="h-9 text-xs" />
          </div>

          <div className="ml-auto h-full flex items-center justify-center">
            <Button
              className="text-xs border border-gray-300 h-9"
              variant="ghost"
              size="icon"
            >
              <Trash className="text-gray-700" size={20} />
            </Button>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <Card className="bg-transparent p-0">
            <CardContent className="p-4 space-y-5">
              <div className="w-full flex justify-between pb-2 border-b">
                <span className="text-base text-gray-400">Subtotal</span>
                <span className="text-sm">
                  R$ {formatCurrency(Number(product.price))}
                </span>
              </div>

              <div className="w-full flex justify-between pb-2 border-b">
                <span className="text-base text-gray-400">Entrega</span>
                <span>
                  {Number(product.restaurant.deliveryFee) > 0 ? (
                    <span>{`R$ ${formatCurrency(Number(product.restaurant.deliveryFee))}`}</span>
                  ) : (
                    <span className="uppercase text-rose-500 text-sm font-normal">
                      Grátis
                    </span>
                  )}
                </span>
              </div>

              <div className="w-full flex justify-between pb-2 border-b">
                <span className="text-base text-gray-400">Descontos</span>
                <span className="text-sm">
                  - R${' '}
                  {formatCurrency(
                    calculateDiscount(
                      Number(product.price),
                      product.discountPercentage,
                    ),
                  )}
                </span>
              </div>
            </CardContent>
          </Card>
          <Button className="w-ful text-lg font-semibold">
            Finalizar pedido
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
