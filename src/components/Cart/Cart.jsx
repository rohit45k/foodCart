import { useContext } from 'react'
import CartContext from "../../store/cart-context"

import classes from './Cart.module.css'

import Modal from "../UI/Modal"
import CartItem from './CartItem'

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItem = (cartCtx.items.length > 0);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItem = cartCtx.items.map((item) => <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} description={item.description} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>)

  return (
    <Modal onClose={props.onHideCart}>
        <ul className={classes['cart-items']}>
            {cartItem}
        </ul>
        <div className={classes['total']}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes['actions']}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItem && <button className={classes['button']}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart