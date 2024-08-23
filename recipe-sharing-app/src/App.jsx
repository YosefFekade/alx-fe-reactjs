import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import AddRecipeForm from '../components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
          </div>
        } />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
