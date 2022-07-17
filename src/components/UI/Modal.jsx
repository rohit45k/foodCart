import ReactDOM from 'react-dom';

import classes from "./Modal.module.css"

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const Overlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')


const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<BackDrop onClick={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </>
  )
}

export default Modal