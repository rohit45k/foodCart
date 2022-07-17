import mealsImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"

import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <>
        <header className={classes.header}>
            <h2>ReactMeals</h2>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="A table full of dishesh" />
        </div>
    </>
  )
}

export default Header;