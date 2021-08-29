import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onBtnClick}
      className={`
        ${classes.button} 
        ${props.model && classes[props.model]}
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
