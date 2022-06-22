const Button = (props) => {
  const {onButtonClick, disabled, ...others} = props;

  return (
    <button
      className="cookie-button"
      onClick={onButtonClick}
      disabled={disabled}
      {...others}
    >
      {props.children}
    </button>
  );
};

export default Button;
