import { useState } from "react"
import { useLocation } from "react-router";
import styles from './EditMeal.module.css'

//types
import { MealFormData } from "../../types/forms"

interface EditMealFormProps {
  handleUpdateMeal: (formData: MealFormData) => Promise<void>
}

const EditMeal = (props: EditMealFormProps): JSX.Element => {
  const { state } = useLocation()
  
  const { handleUpdateMeal } = props

  const [formData, setFormData] = useState<MealFormData>({
    name: state.name,
    description: state.description,
    photo: state.photo
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault()
    handleUpdateMeal(formData)
  }
  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
      <h3>Let's Update This Meal</h3>
        <label 
          htmlFor="name-input"
        >
          Name:
        </label>
        <input 
          type="text" 
          id="name-input" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          autoComplete='off'
        />
        <label htmlFor="description-input">Age:</label>
        <input type="text" id="description-input" name="description" value={formData.description.toString()} onChange={handleChange} autoComplete='off'/>
        <label htmlFor="photo-input">Breed:</label>
        <input type="text" id="photo-input" name="photo" value={formData.photo} onChange={handleChange} autoComplete='off'/>
        <button type="submit">Update Meal</button>
      </form>
    </main>
  )
}

export default EditMeal