import styles from './Meals.module.css';

import MealCard from '../../components/MealCard/MealCard';

import { Meal, User } from "../../types/models";

interface MealProps {
  meals: Meal[]
  user: User | null
  handleDeleteMeal: (id: number) => Promise<void>
}

const Meals = (props: MealProps): JSX.Element => {

  const { meals, handleDeleteMeal, user } = props
  

  if (!meals.length) return <div className={styles.loadingContainer}><h2 className={styles.loading}>Loading...</h2></div>


  return (
    <div className={styles.container}>
      {meals.map((meal: Meal) => (
        <MealCard key={meal.id} meal={meal} user={user} handleDeleteMeal={handleDeleteMeal} />
      ))}
    </div>
  );
};

export default Meals;
