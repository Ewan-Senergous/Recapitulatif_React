import Blog from "./components/Blog";

const post1 = {
  id: 1,
  title: "Les bases du JavaScript",
  author: "Jean Dupont",
  date: "2023-07-15",
  description:
    "Un guide complet pour débuter avec JavaScript, couvrant les concepts fondamentaux comme les variables, les boucles et les fonctions.",
  content:
    "Cet article explique les bases du langage JavaScript, y compris les variables, les boucles et les fonctions.",
};

function App() {
  return (
    <div>
      <Blog science={post1} />
    </div>
  );
}
export default App;
