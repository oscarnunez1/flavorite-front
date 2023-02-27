import { Link } from 'react-router-dom';

import styles from './MealCard.module.css'

import { Meal } from '../../types/models'

interface MealCardProps {
  meal: Meal;
}

const MealCard = (props: MealCardProps): JSX.Element => {
  const { meal } = props;

  return (
    <article className={styles.container}>
      <img src={meal.photo} alt={`${meal.name}'s image`} />
      <h1>{meal.name}</h1>
      <h3>{meal.description}</h3>
      <Link to={`/meals/${meal.id}/edit`}>Edit Meal</Link>
    </article>
  )
}

export default MealCard;
