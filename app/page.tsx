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
    </div>
  )
}
