import mealsImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"

import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h2>ReactMeals</h2>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="A table full of dishesh" />
        </div>
    </>
  )
}

export default Header;