import PropTypes from "prop-types";
function Blog({ science }) {
  return (
    <div>
      <h1>Hello React</h1>
      <p>{science.title}</p>
      <p>{science.description}</p>
    </div>
  );
}

Blog.propTypes = {
  science: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default Blog;
