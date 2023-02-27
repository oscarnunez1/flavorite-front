import styles from './Meals.module.css';

import * as mealService from "../../services/mealService"

import MealCard from '../../components/MealCard/MealCard';

import { Meal } from "../../types/models";

interface MealProps {
  meals: Meal[];
}

const Meals = (props: MealProps): JSX.Element => {

  const { meals } = props

  if (!meals.length) return <h2>Ready To Create A Meal?</h2>

  return (
    <div className={styles.container}>
      {meals.map((meal: Meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default Meals;
