import React from 'react'
import reactDom from 'react-dom'
import classes from './Model.module.css'

const Backdrop = props =>{
    return <>
        <div className={classes.backdrop} onClick={props.onHide}></div>
    </>
}
const ModalOverlay = props =>{
    return <>
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    </>
}

const Model = (props) => {
    const portalElements = document.getElementById('overlays')
  return (
    <>
        {reactDom.createPortal(<Backdrop onHide={props.onHide}/>, portalElements)}
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </>
  )
}

export default Model