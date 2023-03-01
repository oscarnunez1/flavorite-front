import { useState } from "react";
import styles from './NewMeal.module.css';

import { MealFormData } from '../../types/forms';

interface NewMealProps {
  handleAddMeal: (meal: MealFormData) => void;
}

const NewMeal: React.FC<NewMealProps> = ({ handleAddMeal }) => {
  const [form, setForm] = useState<MealFormData>({
    name: '',
    description: '',
    photo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    handleAddMeal(form);
    setForm({
      name: '',
      description: '',
      photo: ''
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="name-input" className={styles.label}>Name:</label>
        <input
          required
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
          id="name-input"
        />
      </div>  
      <div className={styles.inputContainer}>
        <label htmlFor="description-input" className={styles.label}>Description:</label>
        <input
          required
          type="text"
          value={form.description}
          onChange={handleChange}
          name="description"
          id="description-input"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="photo-input" className={styles.label}>Photo URL:</label>
        <input
          required
          type="text"
          value={form.photo}
          onChange={handleChange}
          name="photo"
          id="photo-input"
        />
      </div>
      <div>
        <button type="submit" className={styles.button}>Create Meal</button>
      </div>
    </form>
  );
};

export default NewMeal;
