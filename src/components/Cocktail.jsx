import { useState, useEffect } from "react";
import axios from "axios";

import Blog from "./Blog";
import CocktailList from "./CocktailList";

const blogPosts = [
  {
    id: 1,
    title: "Les bases du JavaScript",
    author: "Jean Dupont",
    date: "2023-07-15",
    texte:
      "Un guide complet pour débuter avec JavaScript, couvrant les concepts fondamentaux comme les variables, les boucles et les fonctions.",
    img: "https://static-00.iconduck.com/assets.00/javascript-icon-256x256-8sn98o22.png",
  },
  {
    id: 2,
    title: "Les nouveautés de CSS3",
    author: "Marie Curie",
    date: "2023-08-10",
    texte:
      "Explorez les nouvelles fonctionnalités introduites par CSS3, notamment les animations, les transitions et les grilles.",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png?f=webp&w=256",
  },
  {
    id: 3,
    title: "Introduction à React",
    author: "Albert Einstein",
    date: "2023-09-05",
    texte:
      "Une introduction à React, la bibliothèque JavaScript utilisée pour construire des interfaces utilisateur dynamiques.",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256",
  },
  {
    id: 4,
    title: "Optimiser le SEO de votre site web",
    author: "Nadia Comaneci",
    date: "2023-10-20",
    texte:
      "Des conseils pratiques pour améliorer le référencement naturel de votre site web et augmenter votre visibilité en ligne.",
    img: "https://cdn-icons-png.freepik.com/256/7108/7108530.png",
  },
];

function Cocktail() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktails, setSelectedCocktails] = useState("");

  const handleChange = (event) => {
    setSelectedCocktails(event.target.value);
  };

  const fetchData = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => setCocktails(response.data.drinks))
      .catch((error) => console.error(error));
  }; // Récupérer Données API

  useEffect(() => {
    fetchData();
  }, []); // Lancer fetchData et vu que [] => Lance qu'une fois

  const filteredCocktailsList = cocktails.filter(
    (cocktail) =>
      cocktail.strCategory === selectedCocktails || selectedCocktails === ""
  );

  console.info(cocktails);

  return (
    <div>
      {blogPosts.map((post) => (
        <Blog science={post} key={post.id} />
      ))}

      <label htmlFor="cocktails">Choose a cocktail category:</label>
      <select id="cocktails" value={selectedCocktails} onChange={handleChange}>
        <option value="">All cocktails</option>
        <option value="Ordinary Drink">Ordinary Drink</option>
        <option value="Other / Unknown">Other / Unknown</option>
        <option value="Cocktail">Cocktail</option>
      </select>
      <p>You selected: {selectedCocktails}</p>

      {filteredCocktailsList.map((cocktail) => (
        <CocktailList cocktail={cocktail} key={cocktail.id} />
      ))}
    </div>
  );
}
export default Cocktail;
