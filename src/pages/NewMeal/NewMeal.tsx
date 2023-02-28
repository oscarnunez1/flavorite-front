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
      <label>
        Name:
        <input
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={form.description}
          onChange={handleChange}
          name="description"
        />
      </label>
      <label>
        Photo URL:
        <input
          type="text"
          value={form.photo}
          onChange={handleChange}
          name="photo"
        />
      </label>
      <button type="submit">Create Meal</button>
    </form>
  );
};

export default NewMeal;
