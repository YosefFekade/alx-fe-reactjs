import { useRecipeStore } from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorited = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorited ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
