import { Prisma } from '@prisma/client'

export type RestaurantInfo = Prisma.RestaurantGetPayload<{
  select: {
    id: true
    name: true
    imageUrl: true
    deliveryFee: true
    deliveryTimeMinutes: true
  }
}>

export type ProductInfo = Prisma.ProductGetPayload<{
  select: {
    id: true
    name: true
    description: true
    price: true
    imageUrl: true
    categoryId: true
    discountPercentage: true
    restaurantId: true
    restaurant: {
      select: {
        id: true
        name: true
        imageUrl: true
        deliveryFee: true
        deliveryTimeMinutes: true
      }
    }
  }
}>

export type RelatedProductInfo = Prisma.ProductGetPayload<{
  include: {
    restaurant: {
      select: {
        name: true
      }
    }
  }
}>
