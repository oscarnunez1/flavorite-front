import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Meal } from '../../types/models';
import { MealFormData } from '../../types/forms';
import { getMealById, updateMeal } from '../../services/mealService';

interface EditMealProps {
  handleUpdateMeal: (mealData: Meal) => Promise<void>;
}

const mealService = { getMealById, updateMeal };

const EditMeal = (props: EditMealProps): JSX.Element => {
  const { handleUpdateMeal } = props;
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const fetchMeal = async (): Promise<void> => {
      const mealData = await mealService.getMealById(id);
      setMeal(mealData);
    };
    fetchMeal();
  }, [id]);

  const handleSubmit = async (formData: MealFormData): Promise<void> => {
    const updatedMeal = await mealService.updateMeal({ ...meal, ...formData });
    await handleUpdateMeal(updatedMeal);
  };

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Meal</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e.target); }}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={meal.name} required />
        <label htmlFor="description">Description</label>
        <textarea name="description" defaultValue={meal.description} required></textarea>
        <label htmlFor="photo">Photo</label>
        <input type="url" name="photo" defaultValue={meal.photo} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditMeal;
