import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {IoMdRemoveCircleOutline} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCartProduct, AddCartProduct } from '../../../Redux/features/ProductSlice'

const Card = ({ id, img, title, description, page, productID }) => {
  const dispatch = useDispatch()
  const { cartProducts } = useSelector((state) => state.products)
  return (
    <div
      key={id}
      className="w-full max-w-md  mx-auto rounded-md shadow-md overflow-hidden"
    >
      <img className="object-contain w-full h-52" src={img} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
        <div className="p-5 flex justify-start">
          {cartProducts.includes(id) ? (
            <button
              className="p-4 bg-red-500 flex gap-1 rounded-2xl font-semibold hover:bg-red-600 hover:text-white"
              onClick={() => {
                dispatch(DeleteCartProduct(id))
              }}
            >
             <h1>Remove From Cart</h1>
              <IoMdRemoveCircleOutline className=' text-2xl' />
            </button>
          ) : (
            <button
              className="p-4 bg-blue-500 flex gap-1 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white"
              onClick={() => {
                dispatch(AddCartProduct(id))
              }}
            >
              <h1>Add To Cart</h1>
              <AiOutlineShoppingCart className='text-2xl' />
            </button>
          )}
        </div>
    </div>
  )
}

export default Card
