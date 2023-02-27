// services
import * as tokenService from './tokenService'

// types
import { Meal } from "../types/models"


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/meals`

async function getAllMeals(): Promise<Meal[]> {
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

async function createMeal(formData: any): Promise<any> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Meal
  } catch (error) {
    console.log(error)
  }
}



export { getAllMeals, createMeal, }
