import PropTypes from "prop-types";
function Blog({ science }) {
  const { texte, img } = science;

  return (
    <div>
      <p>{texte}</p>
      <img src={img} alt={img} />
    </div>
  );
}

Blog.propTypes = {
  science: PropTypes.shape({
    texte: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
};

export default Blog;
