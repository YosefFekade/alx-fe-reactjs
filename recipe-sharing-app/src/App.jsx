import { useState } from 'react'
import RecipeList from './Components/RecipeList'
import AddRecipeForm from './Components/AddRecipeForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RecipeList />
      <AddRecipeForm />
    </div>
  )
}

export default App
