import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Common/Card/Card'
import Loading from '../Common/Loading/Loading'

const Homepage = () => {
  const { products, loading } = useSelector((state) => state.products)

  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {loading && (
          <Loading />
        )}
        {products.map((product, index) => {
          return (
            <div>
              <Card
                id={index}
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

export default Homepage
