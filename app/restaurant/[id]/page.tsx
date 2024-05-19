import { Bike, Star, TimerIcon } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ProductList } from '@/app/_components/product-list'
import { Badge } from '@/app/_components/ui/badge'
import { Card, CardContent } from '@/app/_components/ui/card'
import { formatCurrency } from '@/app/_helpers/price'
import { prismaClient } from '@/app/_lib/prisma'

import { RestaurantImage } from './_components/restaurant-image'

interface RestaurantPageProps {
  params: {
    id: string
  }
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const restaurant = await prismaClient.restaurant.findUnique({
    where: {
      id: params.id,
    },
    include: {
      categories: {
        include: {
          product: {
            where: {
              restaurantId: params.id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  })

  if (restaurant && restaurant.categories) {
    restaurant.categories.sort((a, b) => b.id.localeCompare(a.id))
  }

  if (!restaurant) {
    return notFound()
  }

  return (
    <>
      <RestaurantImage imageUrl={restaurant?.imageUrl} alt={restaurant?.name} />
      <section className="bg-white h-auto w-full relative z-10 mt-[-2rem] rounded-t-3xl pt-5">
        <div className="px-5 flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <Image
              src={restaurant?.imageUrl}
              alt={restaurant?.name}
              width={0}
              height={0}
              className="w-8 h-8 rounded-full"
              sizes="100vh"
            />
            <h1 className="text-xl font-semibold tracking-tight">
              {restaurant.name}
            </h1>
          </div>

          <Badge className="bg-gray-600 flex items-center gap-2 hover:bg-gray-500">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>5.0</span>
          </Badge>
        </div>

        <div className="px-5 flex flex-col gap-5">
          <Card className="mt-8 rounded-md">
            <CardContent className="w-full flex justify-around items-center h-fit py-5">
              <div className="flex justify-center flex-col items-center">
                <span className="flex text-gray-400 items-center gap-1">
                  Entrega
                  <Bike size={20} />
                </span>
                <span className="font-bold">
                  {Number(restaurant.deliveryFee) > 0
                    ? `R$ ${formatCurrency(Number(restaurant.deliveryFee))}`
                    : 'Grátis'}
                </span>
              </div>

              <div className="flex justify-center flex-col items-center">
                <span className="flex text-gray-400 items-center gap-1">
                  Entrega
                  <TimerIcon size={20} />
                </span>
                <span className="font-bold">
                  {restaurant.deliveryTimeMinutes} min
                </span>
              </div>
            </CardContent>
          </Card>
          <div className="flex gap-2 w-full">
            {restaurant.categories.map((category) => (
              <span
                key={category.id}
                className=" w-full bg-gray-100 text-center py-2 rounded-md text-muted-foreground"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        {restaurant.categories.map((category) => (
          <div className="mt-6 space-y-4 pl-4 mb-4" key={category.id}>
            <h2 className=" font-semibold">{category.name}</h2>
            <ProductList products={category.product} />
          </div>
        ))}
      </section>
    </>
  )
}

export default RestaurantPage
