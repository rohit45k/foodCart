import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = ({meal}) => {
  return (
    <li className={classes.meal}>
        <div>
            <h3>{meal.name}</h3>
            <p className={classes.description}>{meal.description}</p>
            <p className={classes.price}>${meal.price.toFixed(2)}</p>
        </div>
        <div>
          <MealItemForm id={meal.id}/>
        </div>
    </li>
  )
}

export default MealItem