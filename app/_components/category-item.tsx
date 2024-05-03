import { Category } from '@prisma/client'
import Image from 'next/image'

interface CategoryItemProps {
  category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 py-3 px-4 bg-white shadow-md rounded-lg">
      <Image
        width={30}
        height={30}
        src={category.imageUrl}
        alt={category.name}
      />
      <span className="font-semibold text-sm">{category.name}</span>
    </div>
  )
}
