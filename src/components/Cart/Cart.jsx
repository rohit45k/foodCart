import classes from './Cart.module.css'

import Modal from "../UI/Modal"

const Cart = (props) => {

    const cartItem = [{id: 'c1', name: 'shushi', amount: 2, price: '15.99'}].map((item) => <li key={item.id}>{item.name}</li>)

  return (
    <Modal onClose={props.onHideCart}>
        <ul className={classes['cart-items']}>
            {cartItem}
        </ul>
        <div className={classes['total']}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes['actions']}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes['button']}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart