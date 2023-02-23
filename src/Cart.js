import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Components/Common/Card/Card'
import Loading from './Components/Common/Loading/Loading'

const Cart = () => {
  const { cartProducts, products, loading } = useSelector((state) => state.products)


  const productsArray = cartProducts.map((item) => {
    return products[item]
  })

  return (
    <div className="container mx-auto p-10">
        {
            !cartProducts.length ? <h1 className='text-2xl'>No Products In The Cart....</h1> :
            <h1 className='text-center text-3xl '>Cart</h1>
        }
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {
            loading &&
            <Loading />
        }
        
        {productsArray.map((product, index) => {
          return (
            <div key={index} className='mt-10'>
              <Card
                id={cartProducts[index]}
                img={product.imageUrl}
                title={product.name}
                description={product.description}
                productID={product._id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
