// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Meals from './pages/Meals/Meals'
import NewMeal from './pages/NewMeal/NewMeal'
import EditMeal from './pages/EditMeal/EditMeal'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as mealService from './services/mealService'

// stylesheets
import './App.css'

// types
import { User, Meal } from './types/models'
import { MealFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [meals, setMeals] = useState<Meal[]>([])

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

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleAddMeal = async (mealData: MealFormData): Promise<void> => {
    const newMeal = await mealService.createMeal(mealData)
    setMeals([newMeal, ...meals])
    navigate('/meals')
  }

  const handleUpdateMeal = async (mealData: Meal): Promise<void> => {
    const updatedMeal = await mealService.updateMeal(mealData)
    setMeals(meals.map((m) => mealData.id === m.id ? updatedMeal : m))
    navigate('/meals')
  }

  const handleDeleteMeal = async (id: number): Promise<void> => {
    await mealService.deleteMeal(id)
    setMeals(meals.filter(m => m.id !== id))
  }
  console.log("MEALS", meals);
  
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
              <Meals meals={meals} handleDeleteMeal={handleDeleteMeal}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/meals/new"
          element={
            <ProtectedRoute user={user}>
              <NewMeal handleAddMeal={handleAddMeal}/>
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
        <Route path="/meals/:id/edit" element={
          <ProtectedRoute user={user}>
            <EditMeal handleUpdateMeal={handleUpdateMeal}/>
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
