import React, { useState } from 'react';

const AddRecipeForm = () => {
  
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); 


  const validate = () => {
    const errors = {};

    if (!title.trim()) {
      errors.title = 'Recipe title is required.';
    }

    if (!ingredients.trim()) {
      errors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsArray = ingredients.split(',');
      if (ingredientsArray.length < 2) {
        errors.ingredients = 'Please provide at least two ingredients.';
      }
    }

    if (!steps.trim()) {
      errors.steps = 'Preparation steps are required.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }


    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({}); 
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      
      {/* Display form errors */}
      {Object.values(errors).length > 0 && (
        <div className="mb-4">
          {Object.values(errors).map((error, index) => (
            <p key={index} className="text-red-500">{error}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.title ? 'border-red-500' : ''}`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="ingredients">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.ingredients ? 'border-red-500' : ''}`}
            placeholder="Enter ingredients, separated by commas"
            rows="4"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.steps ? 'border-red-500' : ''}`}
            placeholder="Enter preparation steps"
            rows="6"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;