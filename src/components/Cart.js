import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems);
  const dispatch = useDispatch()

  const handleClearCart = () => {
      dispatch(clearCart())
  }
  
  return (
    <div className='flex flex-col justify-between items-center gap-5'>
        <p className='font-bold text-4xl text-center'>Cart</p>
        <button 
        className='cursor-pointer bg-black text-white rounded-md p-4 mx-auto'
        onClick={handleClearCart}>Clear cart</button>
        {cartItems.length === 0?
        (<p className='font-bold text-4xl italic mb-4'>There is nothing in the cart. Add some items</p>):(
        <div className='w-6/12 mx-auto bg-gray-200 rounded-md shadow-sm mb-4'>
            <ItemList info={cartItems}/>
        </div>)
}
    </div>
  )
}

export default Cart