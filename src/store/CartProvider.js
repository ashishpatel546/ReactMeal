import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaulCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action)=>{
    if(action.type=== 'ADD'){
        
        const updateCartAmount = state.totalAmount + action.item.price * action.item.amount

        const updatedCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[updatedCartItemIndex]
        let updatedItems;
        if (existingCartItem){
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount + 1}
            // updatedItem.amount = existingCartItem.amount + action.item.amount
            // console.log(existingCartItem);
            // console.log(updatedItem)
            updatedItems = [...state.items];
            updatedItems[updatedCartItemIndex] = updatedItem
        }
        else{
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updateCartAmount
        }
    }

    if(action.type === 'REMOVE'){
        const updatedCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[updatedCartItemIndex]
        const updateCartAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else{
            updatedItems = [...state.items]
            updatedItems[updatedCartItemIndex].amount -= 1
        }

        return {
            items: updatedItems,
            totalAmount: updateCartAmount
        }
    }
    return defaulCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaulCartState)
    const addItemHandler = (item)=>{
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemHandler = (id)=>{
        dispatchCartAction({type: 'REMOVE', id:id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem : addItemHandler,
        removeItem: removeItemHandler
    }

  return( 
   <CartContext.Provider value={cartContext}>
       {props.children}
   </CartContext.Provider>)
  
}

export default CartProvider