import { RelatedProductInfo } from '../_types'
import { ProductItem } from './product-item'

interface ProductListProps {
  products: RelatedProductInfo[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex overflow-x-scroll gap-5 [&::-webkit-scrollbar]:hidden pr-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
