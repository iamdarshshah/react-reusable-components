import React from "react";
import PropTypes from "prop-types";

const Image = props => {
  const { src, className, alt } = props;
  return <img src={src} className={className} alt={alt ? alt : "Image"} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string
};

export default Image;
