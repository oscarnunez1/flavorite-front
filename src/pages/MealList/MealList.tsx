import styles from './MealList.module.css';

interface MealListProps {
  // Define the type of the props object
}

const MealList = (props: MealListProps): JSX.Element => {
  return (
    <div className={styles.container}>
      Meal List
    </div>
  );
}

export default MealList;

