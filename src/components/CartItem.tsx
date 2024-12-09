import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";
import { FaTrash } from "react-icons/fa6";

type CartItemProps = {
    id: number;
    quantity: number;
}

const CartItem = ({id, quantity}:CartItemProps) => {

    const { removeItem } = useShoppingCart();
    const cartItem = storeItems.find(i => i.id === id)

    if (cartItem == null) return null
    
    return (
        <div className="flex gap-3 mt-4">
            <img src={cartItem.imgUrl} style={{width: "125px", 
                height:"75px", objectFit: "cover"
            }}/>
            <div className="mr-auto">
                <div className="">
                    {cartItem.name} {quantity > 1 && <span
                    className="text-gray-900 text-xs">x{quantity}</span>}
                </div>
                <div className="text-gray-900 text-xs m-1">
                        {formatCurrency(cartItem.price)}
                </div>
                <div className="m-1">{formatCurrency(cartItem.price*quantity)}</div>
                
            </div>
            <button className="border-gray-900 bg-red-600 text-white p-1 rounded h-10 w-10 my-auto place-items-center"
                 onClick={() => removeItem(cartItem.id)}><FaTrash /></button>
        </div>
    );
}

export default CartItem