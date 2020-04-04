import React from "react";
import PropTypes from "prop-types";

const CardBox = props => {
  const {
    heading,
    children,
    styleName,
    cardStyle,
    childrenStyle,
    headerOutside,
    headingStyle
  } = props;
  return (
    <div className={`${styleName}`}>
      {headerOutside && (
        <div className="jr-entry-header">
          <h3 className="entry-heading">{heading}</h3>
          {children.length > 1 && (
            <div className="entry-description">{children[0]}</div>
          )}
        </div>
      )}

      <div className={`jr-card ${cardStyle}`}>
        {!headerOutside && heading && (
          <div className={`jr-card-header ${headingStyle}`}>
            <h3 className="card-heading">{heading}</h3>
            {children.length > 1 && (
              <div className="sub-heading">{children[0]}</div>
            )}
          </div>
        )}
        <div className={`jr-card-body ${childrenStyle}`}>
          {children.length > 1 ? children[1] : children}
        </div>
      </div>
    </div>
  );
};

CardBox.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.object,
  styleName: PropTypes.object,
  cardStyle: PropTypes.string,
  childrenStyle: PropTypes.string,
  headerOutside: PropTypes.string,
  headingStyle: PropTypes.string
};

CardBox.defaultProps = {
  cardStyle: "",
  headingStyle: "",
  childrenStyle: "",
  styleName: "col-lg-6 col-sm-12"
};

export default CardBox;
