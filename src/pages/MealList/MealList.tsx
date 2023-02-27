import { Meal } from "../../types/models";
import styles from './MealList.module.css';

interface MealListProps {
  meals: Meal[];
}

const MealList = ({ meals }: MealListProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {meals.map((meal) => (
        <p key={meal.id}>
          {meal.name}
        </p>
      ))}
    </div>
  );
};

export default MealList;
