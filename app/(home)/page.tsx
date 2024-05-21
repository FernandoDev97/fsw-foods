import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { CategoryList } from '../_components/category-list'
import { Header } from '../_components/header'
import { ProductList } from '../_components/product-list'
import { PrommoBanner } from '../_components/prommo-banner'
import { RestaurantList } from '../_components/restaurant-list'
import { Search } from '../_components/search'
import { RelatedProductInfo } from '../_types'
import { getProducts } from './_actions/get-products'

export default async function Home() {
  const products: RelatedProductInfo[] = await getProducts()
  return (
    <div>
      <Header />
      <div className="px-5 mt-5">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <CategoryList />
      </div>

      <div className="mt-6 px-5">
        <PrommoBanner
          src="/bannerPizza.png"
          alt="Banner que idica ate 30% de desconto com um fundo vermelho de uma pizza"
        />
      </div>

      <div className="mt-6 pl-5 space-y-4">
        <div className="w-full flex justify-between pr-5">
          <h2 className="text-lg sm:text-xl font-semibold">
            Pedidos recomendados
          </h2>
          <Link
            href="/product/recommended"
            className="flex text-sm sm:text-base items-center text-primary hover:text-primary/70 transition-colors"
          >
            Ver todos <ChevronRight size={18} />
          </Link>
        </div>
        <ProductList products={products} />
      </div>

      <div className="mt-6 px-5">
        <PrommoBanner
          src="/bannerBurguer.png"
          alt='"Banner que indica a partir de R$ 19,90 em lanches de desconto com um fundo amarelo e tres belos hamburgers"'
        />
      </div>

      <div className="py-6 pl-5 space-y-4">
        <div className="w-full flex justify-between pr-5">
          <h2 className="text-lg sm:text-xl font-semibold">
            Restaurantes recomendados
          </h2>
          <Link
            href="/restaurant/recommended"
            className="flex text-sm sm:text-base items-center text-primary hover:text-primary/70 transition-colors"
          >
            Ver todos <ChevronRight size={18} />
          </Link>
        </div>
        <RestaurantList />
      </div>
    </div>
  )
}
