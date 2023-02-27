// assets
// import defaultPic from '../../assets/icons/meal.png'
import styles from './MealCard.module.css'

// types
import { Meal } from '../../types/models'

interface MealCardProps {
  meal: Meal;
}

const MealCard = (props: MealCardProps): JSX.Element => {
  const { meal } = props;

  // const mealPic = meal.photo ? meal.photo : defaultPic;

  return (
    <article className={styles.container}>
      <img src={meal.photo} alt={`${meal.name}'s image`} />
      <h1>{meal.name}</h1>
      <h3>{meal.description}</h3>
    </article>
  )
}

export default MealCard;

