import React from "react";
import PropTypes from "prop-types";
const Text = props => {
  const {
    id,
    type,
    className,
    name,
    readOnly,
    noClass,
    value,
    placeholder,
    disabled,
    reference,
    pattern,
    onKeyPress,
    onChange,
    onBlur
  } = props;
  return (
    <input
      id={id ? id : ""}
      type={type ? type : "text"}
      className={noClass ? "" : className ? className : "form-control"}
      name={name ? name : ""}
      value={value ? value : null}
      placeholder={placeholder ? placeholder : "Input"}
      disabled={disabled ? true : false}
      ref={reference ? reference : null}
      pattern={pattern ? pattern : null}
      onKeyPress={onKeyPress ? onKeyPress : null}
      onChange={onChange ? onChange : null}
      onBlur={onBlur ? onBlur : null}
      readOnly={readOnly ? "readonly" : ""}
    />
  );
};

Text.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  noClass: PropTypes.bool,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  reference: PropTypes.func,
  pattern: PropTypes.instanceOf(RegExp),
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default Text;
