import Header from '~/component/header'
import Footer from '~/component/footer'
import Listproduct from '~/component/lisproduct'
import { useState } from 'react'
import Banner from '~/component/banner'
import '../index.css'
type productType = {
  name: string
  price: number
}
const Home = () => {
  let productinit = {
    name: 'Sản phẩm chưa cập nhật',
    price: 0
  }
  const [product, setproduct] = useState(productinit)

  const getproduct = () => {
    setproduct({
      name: 'laptop',
      price: 2000
    })
  }

  const showProduct1 = (product: productType) => {
    return (
      <>
        <h1 className='text-red-800'>{product.name}</h1>
        <h2>{product.price}</h2>
      </>
    )
  }
  const ShowProduct2 = (pros: { product: productType }) => {
    return (
      <>
        <h1>{pros.product.name}</h1>
        <h2>{pros.product.price}</h2>
      </>
    )
  }
  return (
    <>
      {/* <button className='bg-red-900' onClick={() => getproduct()}>
        Cập nhật sản phẩm
      </button>
      {showProduct1(product)}
      <ShowProduct2 product={product} />
      <h1 className=''>Trang Web bán hàng</h1> */}
      <Listproduct />
    </>
  )
}

export default Home
