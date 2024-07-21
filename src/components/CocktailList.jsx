/* eslint-disable react/prop-types */
function CocktailList({ cocktail }) {
  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
    </div>
  );
}
export default CocktailList;
