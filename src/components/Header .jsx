import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>COCKTAIL-EWAN</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="cocktail">Cocktail</Link>
      </nav>
    </header>
  );
}
