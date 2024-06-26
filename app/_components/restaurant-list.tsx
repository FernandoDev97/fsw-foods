import { prismaClient } from '../_lib/prisma'
import { RestaurantItem } from './restaurant-item'

export const RestaurantList = async () => {
  const restaurants = await prismaClient.restaurant.findMany({
    take: 10,
  })
  return (
    <div className="flex overflow-x-scroll gap-5 [&::-webkit-scrollbar]:hidden pr-5">
      {restaurants.map((restaurant) => (
        <div className="min-w-[266px] max-w-[266px]">
          <RestaurantItem restauant={restaurant} key={restaurant.id} />
        </div>
      ))}
    </div>
  )
}
