import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genre }) {
  return (
    <h3>
      {title} {poster}
    </h3>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Movie;
