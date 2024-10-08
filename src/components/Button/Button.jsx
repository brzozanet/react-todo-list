import PropTypes from "prop-types";

export const Button = (props) => {
  return (
    <>
      <button>{props.children}</button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
