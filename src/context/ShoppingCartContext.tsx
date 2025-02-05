import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";


type ShoppingCartProviderProps = {
    children:ReactNode;
}

type ShoppingCartContextProps = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id:number) => void;
    increaseQuantity: (id:number) => void;
    decreaseQuantity: (id:number) => void;
    removeItem: (id:number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

type CartItem = {
    id:number;
    quantity:number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( {children}:ShoppingCartProviderProps ){

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseQuantity = (id:number) => {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null) {
                return [...currentItems, {id, quantity:1}]
            } else {
                return currentItems.map(item => {
                    if(item.id ===id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseQuantity = (id:number) => {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if(item.id ===id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (id:number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
    <ShoppingCartContext.Provider 
    value={{
    getItemQuantity, 
    increaseQuantity, 
    decreaseQuantity, 
    removeItem,
    openCart,
    closeCart,
    cartItems, 
    cartQuantity}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
    );
}