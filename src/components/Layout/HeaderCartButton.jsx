import { useContext, useState, useEffect } from "react"
import CartContext from "../../store/cart-context"

import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"


function HeaderCartButton(props) {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const items = cartCtx.items;

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  const btnStyle = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) {
      return
    } 
    setBtnIsHighlighted(true);
    
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button className={btnStyle} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>My Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCartButton