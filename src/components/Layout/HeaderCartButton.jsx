import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"

function HeaderCartButton() {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>My Cart</span>
        <span className={classes.badge}>5</span>
    </button>
  )
}

export default HeaderCartButton