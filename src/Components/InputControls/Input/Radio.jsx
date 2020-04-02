import React from "react";
import PropTypes from "prop-types";
const Radio = props => {
  const {
    id,
    type,
    className,
    name,
    autoFocus,
    required,
    defaultChecked,
    readOnly,
    noClass,
    value,
    checked,
    disabled,
    reference,
    onKeyPress,
    onChange,
    onBlur
  } = props;
  return (
    <input
      id={id ? id : ""}
      type={type ? type : "radio"}
      name={name ? name : ""}
      autoFocus={autoFocus ? true : false}
      required={required ? true : false}
      defaultChecked={defaultChecked ? true : false}
      className={noClass ? "" : className ? className : "form-control"}
      value={value ? value : null}
      checked={checked ? checked : ""}
      disabled={disabled ? true : false}
      ref={reference ? reference : null}
      onKeyPress={onKeyPress ? onKeyPress : null}
      onChange={onChange ? onChange : null}
      onBlur={onBlur ? onBlur : null}
      readOnly={readOnly ? "readonly" : ""}
    />
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  noClass: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  reference: PropTypes.func,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default Radio;
