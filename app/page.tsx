import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CategoryList } from './_components/category-list'
import { Header } from './_components/header'
import { ProductList } from './_components/product-list'
import { Search } from './_components/search'

export default function Home() {
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
        <Image
          src="/bannerPizza.png"
          alt="Banner que idica ate 30% de desconto com um fundo vermelho de uma pizza"
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mt-6 pl-5 space-y-4">
        <div className="w-full flex justify-between pr-5">
          <h2 className="text-xl font-semibold">Pedidos recomendados</h2>
          <Link
            href="/"
            className="flex items-center text-primary hover:text-primary/70 transition-colors"
          >
            Ver todos <ChevronRight size={18} />
          </Link>
        </div>
        <ProductList />
      </div>
    </div>
  )
}
