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
    <main className={styles.container}>
      <h1>New Meal</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          required
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
          id="name-input"
        />
        <label htmlFor="description-input">Description:</label>
        <input
          required
          type="text"
          value={form.description}
          onChange={handleChange}
          name="description"
          id="description-input"
        />
        <label htmlFor="photo-input">Photo URL:</label>
        <input
          required
          type="text"
          value={form.photo}
          onChange={handleChange}
          name="photo"
          id="photo-input"
        />
        <button type="submit">Create Meal</button>
      </form>
    </main>
  );
};

export default NewMeal;
