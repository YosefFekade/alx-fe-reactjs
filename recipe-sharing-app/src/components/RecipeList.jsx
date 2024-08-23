<<<<<<< HEAD:recipe-sharing-app/src/Components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
=======
import { useRecipeStore } from './recipeStore';
>>>>>>> 436dc88c6ff65c3a725d2e66edbe3690f7041bf9:recipe-sharing-app/src/components/RecipeList.jsx

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
<<<<<<< HEAD:recipe-sharing-app/src/Components/RecipeList.jsx

export default RecipeList;
=======
export default RecipeList
>>>>>>> 436dc88c6ff65c3a725d2e66edbe3690f7041bf9:recipe-sharing-app/src/components/RecipeList.jsx
