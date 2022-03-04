import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext)
  const numberOfCartItems = ctx.items.reduce((currentVal, item)=>{
    return currentVal + item.amount;
  }, 0)
  return (
    <>
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon/> </span>
        <span>Your Cart</span>
        <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
    </>
  )
}

export default HeaderCartButton