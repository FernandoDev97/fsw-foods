import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link
      href={`/category/${category.name}`}
      className="flex items-center gap-3 py-3 px-4 bg-white shadow-md rounded-lg"
    >
      <Image
        width={30}
        height={30}
        src={category.imageUrl}
        alt={category.name}
        className="w-auto h-auto"
      />
      <span className="font-semibold text-sm">{category.name}</span>
    </Link>
  )
}
