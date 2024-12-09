import { FaX } from 'react-icons/fa6'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import { formatCurrency } from '../utils/formatCurrency'
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen:boolean
}

const ShoppingCart = ({isOpen}:ShoppingCartProps) => {

const {closeCart, cartItems} = useShoppingCart()

  return (
    <div
      className={`sidebar fixed duration-75 bg-gray-300 top-0 bottom-0 lg:left-0 overflow-y-auto text-center 
      ${isOpen ? 'p-2 w-[300px]' : 'p-0 w-0'}`}
    >
      <p className='text-gray-900 font-bold'>Your Cart</p>
      <FaX 
        className="text-black font-bold cursor-pointer" 
        onClick={closeCart} 
      />
      <div>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <div className='mr-auto mt-5 text-gray-800 font-bold'>
        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
          const item = storeItems.find(i => i.id === cartItem.id)
          return total + (item?.price || 0) * cartItem.quantity
        }, 0))}
      </div>
    </div>

  )
}

export default ShoppingCart