import Image from 'next/image'

import { CategoryList } from './_components/category-list'
import { Header } from './_components/header'
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
    </div>
  )
}
