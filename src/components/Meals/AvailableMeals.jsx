import { useEffect, useState, useCallback } from "react";

import classes from "./AvailableMeals.module.css"

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card"


function AvailableMeals() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState('');

  const fetchMeals = useCallback(async () => {
    const response = await fetch("https://reactmeals-880a2-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
    const data = await response.json();

    let mealsData = [];
    for(const key in data) {
      mealsData.push({id: key, ...data[key]})
    }
    setMeals(mealsData);
  }, []);

  useEffect(() => {
    fetchMeals().catch(error => {
      setHasError(error.message || 'Something went wrong');
    })
    setIsLoading(false)
  }, [fetchMeals]);

  const mealsList = meals.map(meal => <MealItem key={meal.id} meal={meal} />)

  return (
    <section className={classes.meals}>
        <Card>
            <ul>
              {isLoading && <h2>Loading your dishes...</h2>}
              {hasError && <p className={classes['error-text']}>{hasError}</p>}
                {!isLoading && !hasError && mealsList}
            </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals