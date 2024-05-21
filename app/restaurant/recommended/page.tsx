import { Header } from '@/app/_components/header'
import { RestaurantItem } from '@/app/_components/restaurant-item'
import { prismaClient } from '@/app/_lib/prisma'

const RestauratsRecommendeds = async () => {
  const restaurants = await prismaClient.restaurant.findMany({})
  return (
    <>
      <Header />
      <h1 className="px-5 mt-8 font-semibold text-xl">
        Restaurantes recomendados.
      </h1>

      <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 gap-4 px-5">
        {restaurants.map((restaurant) => (
          <RestaurantItem restauant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  )
}

export default RestauratsRecommendeds
