import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency"


type StoreItemProp = {
    id:number;
    name:string;
    price:number;
    imgUrl:string;

}

const StoreItem = ({id, name, price, imgUrl}:StoreItemProp) => {

 const { 
  getItemQuantity, 
  increaseQuantity, 
  decreaseQuantity, 
  removeItem } = useShoppingCart()
 const quantity = getItemQuantity(id);

  return (
    <div className="p-6">
        <img className="h-60 w-96" src={imgUrl} alt="" />
        <p className="m-2">{name}</p>
        <p className="m-2">{formatCurrency(price)}</p>
        <div className="mt-auto">
          {quantity === getItemQuantity(0) ? (<button className="w-96 p-2 bg-indigo-900 text-white rounded "
        onClick={() => increaseQuantity(id)}>+ Add to Cart</button>) : 
          <div className="flex text-center flex-col gap-10">
            <div className="flex align-middle justify-center flex-row gap-10">
              <button className="bg-gray-800 text-white p-3 rounded w-11" onClick={() => decreaseQuantity(id)}>-</button>
              <div className="my-auto"><span className="font-bold">{`${quantity}`}</span> in cart</div>
              <button className="bg-gray-800 text-white p-3 rounded w-11" onClick={() => increaseQuantity(id)}>+</button>
            </div>
            <button onClick={() => removeItem(id)} className="p-2 bg-red-600 text-white rounded">Remove</button>
          </div>}
        </div>
    </div>
  )
}

export default StoreItem