import getAllproduct from '~/apis/product'
import { useState, useEffect } from 'react'
import React from 'react'
import productType from '~/types/product'

const Listproduct = () => {
  const [products, setproducts] = useState<productType[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await getAllproduct()
      setproducts(data)
    })()
  }, [])
  console.log(products)

  return (
    <div className='grid grid-cols-3 gap-6 pl-14 pr-14'>
      {products
        .map((product: productType) => (
          <a href='#' className='group relative  overflow-hidden'>
            <button className='absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75'>
              <span className='sr-only'>Wishlist</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </button>

            <img
              src={product.thumbnail}
              alt='{product.id}'
              className='h-40  w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
            />

            <div className='relative border border-gray-100 bg-white p-6'>
              <span className='whitespace-nowrap bg-teal-600 px-3 py-1.5 text-xs font-medium'> New </span>

              <h3 className='mt-4 text-lg font-medium text-gray-900'>Robot Toy</h3>

              <p className='mt-1.5 text-sm text-gray-700'>$14.99</p>

              <form className='mt-4'>
                <button className='block w-full rounded bg-teal-600 p-4 text-sm font-medium transition hover:scale-105'>
                  Add to Cart
                </button>
              </form>
            </div>
          </a>
        ))
        .slice(0, 9)}
    </div>

    // <div>
    //   <h2>San pham danh cho nam:</h2>
    //   {products.map((product: productType) => (
    //     <div key={product.id}>
    //       <h3>{product.title}</h3>
    //       <p>{product.price}</p>
    //       <img width={360} src={product.thumbnail} alt={product.title} />
    //       <p>{product.description}</p>
    //     </div>
    //   ))}
    // </div>
  )
}

export default Listproduct
