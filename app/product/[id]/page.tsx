import { notFound } from 'next/navigation'

import { ProductInfo, RelatedProductInfo } from '../../_types'
import { getCurrentProduct } from './_actions/get-current-product'
import { getProducts } from './_actions/get-products'
import { ProductImage } from './_components/product-image'
import { ProductInfos } from './_components/product-infos'

interface ProductPageProps {
  params: {
    id: string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const currentProduct: ProductInfo = await getCurrentProduct(params.id)

  const categoryId = currentProduct?.categoryId
  const restaurantId = currentProduct?.restaurantId

  const productsInSameCategoryAndRestaurant: RelatedProductInfo[] =
    await getProducts(categoryId, restaurantId)

  if (!currentProduct) {
    return notFound()
  }
  return (
    <>
      <ProductImage
        imageUrl={currentProduct.imageUrl}
        name={currentProduct.name}
      />
      <ProductInfos
        productsInSameCategoryAndRestaurant={
          productsInSameCategoryAndRestaurant
        }
        product={currentProduct}
      />
    </>
  )
}

export default ProductPage
