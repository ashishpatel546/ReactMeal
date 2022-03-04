import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>React Meals </h1>  
            <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div className={classes['main-image']} >
            <img src={mealsImage} alt='A tabel for special Foods'/>
        </div>
    </>
  )
}

export default Header