import { useState } from 'react';
<<<<<<< HEAD:recipe-sharing-app/src/Components/AddRecipeForm.jsx
import { useRecipeStore } from '..components/recipeStore';
=======
import { useRecipeStore } from './recipeStore';
>>>>>>> 436dc88c6ff65c3a725d2e66edbe3690f7041bf9:recipe-sharing-app/src/components/AddRecipeForm.jsx

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm
