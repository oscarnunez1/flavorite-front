import styles from './MealList.module.css';
import { Meal } from '../../types/models';

interface MealListProps {
  meals: Meal[];
}

const MealList = (props: MealListProps): JSX.Element => {
  console.log("MealList props:", props);
  
  return (
    <div className={styles.container}>
      Meal List
    </div>
  );
}

export default MealList;

