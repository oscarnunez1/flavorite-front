import { Meal } from "../../types/models";
import styles from './MealList.module.css';
import MealCard from '../../components/MealCard/MealCard';

interface MealListProps {
  meals: Meal[];
}

const MealList = ({ meals }: MealListProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
