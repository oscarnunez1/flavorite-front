// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import MealList from './pages/MealList/MealList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as mealService from './services/mealService'

// stylesheets
import './App.css'

// types
import { User } from './types/models'
import { Meal } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())

  const [meals, setMeals] = useState<Meal[]>([])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  useEffect((): void => {
    const fetchMeals = async (): Promise<void> => {
      try {
        const mealData: Meal[] = await mealService.getAllMeals()
        setMeals(mealData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchMeals()
  }, [user])

  const handleAddMeal = async (mealData: any): Promise<void> => {
    const newMeal = await mealService.createMeal(mealData)
    setMeals([newMeal, ...meals])
    navigate('/meals')
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/meals"
          element={
            <ProtectedRoute user={user}>
              <MealList meals={meals}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
