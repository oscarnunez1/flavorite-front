import { Link } from 'react-router-dom';

import styles from './MealCard.module.css'

import { Meal } from '../../types/models'

interface MealCardProps {
  meal: Meal;
  handleDeleteMeal: (id: number) => Promise<void>
}

const MealCard = (props: MealCardProps): JSX.Element => {
  const { meal, handleDeleteMeal } = props;
  
  return (
    <article className={styles.container}>
      <img src={meal.photo} alt={`${meal.name}'s image`} />
      <h1>{meal.name}</h1>
      <h3>{meal.description}</h3>
      <Link to={`/meals/${meal.id}/edit`} state={{meal}}>Edit Meal</Link>
      <button onClick={() => handleDeleteMeal(meal.id)}>Delete</button>
    </article>
  )
}

export default MealCard;
