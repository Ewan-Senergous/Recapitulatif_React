import Blog from "./components/Blog";

const blogPosts = {
  id: 1,
  title: "Les bases du JavaScript",
  author: "Jean Dupont",
  date: "2023-07-15",
  texte:
    "Un guide complet pour débuter avec JavaScript, couvrant les concepts fondamentaux comme les variables, les boucles et les fonctions.",
  img: "https://static-00.iconduck.com/assets.00/javascript-icon-256x256-8sn98o22.png",
};

function App() {
  return (
    <div>
      <Blog science={blogPosts} />
    </div>
  );
}
export default App;
