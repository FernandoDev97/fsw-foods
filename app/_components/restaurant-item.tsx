import { Restaurant } from '@prisma/client'
import { AlarmClock, BikeIcon, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { formatCurrency } from '../_helpers/price'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface RestaurantItemProps {
  restauant: Restaurant
}

export const RestaurantItem = ({ restauant }: RestaurantItemProps) => {
  return (
    <Link href={`/restaurant/${restauant.id}`}>
      <div className="min-w-[266px] max-w-[266px] space-y-3">
        <div className="wfull relative h-[136px] ">
          <Image
            src={restauant.imageUrl}
            fill
            className="object-cover rounded-lg"
            alt={restauant.name}
          />
          <div className="absolute top-2 left-2">
            <Badge className="flex bg-white text-black items-center gap-1 px-2">
              <Star className="fill-yellow-400 text-yellow-400" size={14} />
              <span className="text-xs">5.0</span>
            </Badge>
          </div>

          <Button className="absolute top-2 right-2 rounded-full h-auto p-2 bg-gray-800">
            <Heart size={16} className="fill-white" />
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-sm">{restauant.name}</h3>
          <div className="flex gap-3">
            <div className="flex gap-1 items-center">
              <BikeIcon size={18} className="text-primary" />
              <span className="text-muted-foreground text-sm">
                {Number(restauant.deliveryFee) === 0
                  ? 'Entrega grátis'
                  : `R$ ${formatCurrency(Number(restauant.deliveryFee))}`}
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <AlarmClock size={18} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                {restauant.deliveryTimeMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
