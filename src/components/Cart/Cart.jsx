import { useState, useContext } from 'react'
import Checkout from "./Checkout"
import CartContext from "../../store/cart-context"

import classes from './Cart.module.css'

import Modal from "../UI/Modal"
import CartItem from './CartItem'

const Cart = (props) => {

    const [confirm, setConfirm] = useState(false);
    const [success, setSuccess] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItem = (cartCtx.items.length > 0);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const onOrderHandler = () => {
        setConfirm(true);
    }

    const onConfirmOrderHandler = async(userData) => {
        try {
            const response = await fetch('https://reactmeals-880a2-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    order: cartCtx.items
                })
            })
    
            if(!response.ok) {
                throw new Error('Something went wrong while sending the order');
            }
            setSuccess(true);
            cartCtx.reset();
        } catch (error) {
            console.log(error.message);
        }
    }

    const cartItem = cartCtx.items.map((item) => <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} description={item.description} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>)

    if(success) {
        return <Modal onClose={props.onHideCart}>
            <h2>Thanks For Order.❤</h2>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onHideCart}>Close</button>
            </div>
        </Modal>
    }

  return (
    <Modal onClose={props.onHideCart}>
        {!confirm && <ul className={classes['cart-items']}>
            {cartItem}
        </ul>
        }
        <div className={classes['total']}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {confirm ? 
            <Checkout onConfirm={onConfirmOrderHandler} onClose={props.onHideCart}/> : 
            <div className={classes['actions']}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItem && <button className={classes['button']} onClick={onOrderHandler}>Order</button>}
            </div>
        }
    </Modal>
  )
}

export default Cart