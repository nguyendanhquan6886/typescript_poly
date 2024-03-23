import productType from './product'

type cartType = {
  id: number
  products: productType[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
