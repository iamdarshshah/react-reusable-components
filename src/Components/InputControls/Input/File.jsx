import React from "react";
import PropTypes from "prop-types";
const File = (props) => {
  const {
    id,
    type,
    className,
    name,
    accept,
    multiple,
    noClass,
    onChange,
    onClick,
    reference,
    required,
  } = props;
  return (
    <input
      id={id ? id : ""}
      type={type ? type : "file"}
      className={noClass ? "" : className ? className : "form-control"}
      name={name ? name : ""}
      accept={accept ? accept : ""}
      ref={reference ? reference : null}
      required={required ? required : null}
      multiple={multiple ? multiple : null}
      onChange={onChange ? onChange : null}
      onClick={onClick ? onClick : null}
    />
  );
};

File.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  className: PropTypes.string,
  noClass: PropTypes.bool,
  reference: PropTypes.func,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default File;
