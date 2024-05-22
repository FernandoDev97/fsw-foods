import { Header } from '@/app/_components/header'
import { ProductItem } from '@/app/_components/product-item'
import { prismaClient } from '@/app/_lib/prisma'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        name: params.slug,
      },
    },
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  })

  return (
    <>
      <Header />
      <h1 className="px-5 mt-8 font-semibold text-xl">Pedidos recomendados.</h1>

      <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 gap-4 px-5">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default CategoryPage
