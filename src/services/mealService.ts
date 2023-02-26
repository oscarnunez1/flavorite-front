// services
import * as tokenService from './tokenService'

// types
import { Meal } from "../types/models"


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/meals`

async function index(): Promise<Meal[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { index }
