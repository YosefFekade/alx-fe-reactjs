<<<<<<< HEAD:recipe-sharing-app/src/Components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
=======
import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore
>>>>>>> 436dc88c6ff65c3a725d2e66edbe3690f7041bf9:recipe-sharing-app/src/components/recipeStore.js
