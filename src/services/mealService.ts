// services
import * as tokenService from './tokenService'

// types
import { Meal } from "../types/models"
import { MealFormData } from '../types/forms'


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/meals`

const getAllMeals = async (): Promise<Meal[]> => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Meal[]
  } catch (error) {
    console.log(error)
    throw error
  }
}

const createMeal = async (mealData: MealFormData): Promise<any> => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mealData)
    })
    return await res.json() as Meal
  } catch (error) {
    console.log(error)
    throw error
  }
}


const updateMeal = async (mealData: Meal): Promise<Meal> => {
  try {
    const res = await fetch(`${BASE_URL}/${mealData.id}`, {
      method: 'PUT', 
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mealData)
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

export { getAllMeals, getMealById, createMeal, updateMeal }
