import { useState } from "react";
import { Meal } from "../../types/models";
import { MealFormData } from "../../types/forms";
import { useLocation } from "react-router";

import styles from "./EditMeal.module.css"

interface EditMealProps {
  handleUpdateMeal: (mealData: Meal) => Promise<void>;
}

const EditMealForm = (props: EditMealProps): JSX.Element => {
  const location = useLocation()
  const { meal } = location.state
  const { handleUpdateMeal } = props;
  
  const [formData, setFormData] = useState<MealFormData>({
    name: meal.name,
    description: meal.description,
    photo: meal.photo,
  });

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();
    const updatedMeal = { ...meal, ...formData };
    await handleUpdateMeal(updatedMeal);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <textarea
            value={formData.description}
            name="description"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="photo-upload" className={styles.label}>Upload Photo</label>
          <input
            type="url"
            value={formData.photo}
            name="photo"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>Save</button>
        </div>
      </form>
    </>
  );
};

export default EditMealForm;


