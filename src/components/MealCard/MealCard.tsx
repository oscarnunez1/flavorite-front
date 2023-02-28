import { Link } from 'react-router-dom';

import styles from './MealCard.module.css'
import defaultPic from '../../assets/icons/profile.png'

import { Meal, Profile } from '../../types/models'

interface MealCardProps {
  meal: Meal;
  handleDeleteMeal: (id: number) => Promise<void>
}

const MealCard = (props: MealCardProps): JSX.Element => {
  const { meal, handleDeleteMeal } = props;

  console.log("PROFILE", meal.profile)

  const profilePic = meal.profile.photo ? meal.profile.photo : defaultPic

  return (
    <article className={styles.container}>
      <img src={meal.photo} alt={`${meal.name}'s image`} />
      <img src={profilePic} alt={`${meal.profile.name}'s avatar`} />
      <h1>{meal.name}</h1>
      <h3>{meal.description}</h3>
      <Link type='button' to={`/meals/${meal.id}/edit`} state={{meal}}>Edit Meal</Link>
      <button onClick={() => handleDeleteMeal(meal.id)}>Delete</button>
    </article>
  )
}

export default MealCard;
