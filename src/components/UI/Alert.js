import classes from "./Alert.module.css";

const Alert = (props) => {
  return (
    <div className={`${classes.alert} ${props.type === 'error' && classes.error}`}>
      {props.children}
    </div>
  )
};

export default Alert;
