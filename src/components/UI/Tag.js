import classes from "./Tag.module.css";

const Tag = (props) => {
  return (
    <span
      className={`${classes.tag} ${props.priority && classes[props.priority]}`}
    >
      {props.children}
    </span>
  );
};

export default Tag;
