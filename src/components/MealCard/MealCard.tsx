import { Link } from 'react-router-dom';

import styles from './MealCard.module.css'
import defaultPic from '../../assets/icons/profile.png'

import { Meal, User } from '../../types/models'

interface MealCardProps {
  meal: Meal;
  user: User | null;
  handleDeleteMeal: (id: number) => Promise<void>
}

const MealCard = (props: MealCardProps): JSX.Element => {
  const { meal, handleDeleteMeal, user } = props;

  const profilePic = meal.profile?.photo ? meal.profile.photo : defaultPic

  console.log("PROFILE INFO: ", user?.profile.id, meal.profile.id);
  

  return (
    <article className={styles.container}>
      <img src={meal.photo} alt={`${meal.name}'s image`} />
      <img src={profilePic} alt={`${meal.profile.name}'s avatar`} />
      <h1>{meal.name}</h1>
      <h3>{meal.description}</h3>
      {meal.profile.id === user?.profile.id && (
        <>
          <Link type='button' to={`/meals/${meal.id}/edit`} state={{meal}}>Edit Meal</Link>
          <button onClick={() => handleDeleteMeal(meal.id)}>Delete</button>
        </>
      )}

    </article>
  )
}

export default MealCard;
