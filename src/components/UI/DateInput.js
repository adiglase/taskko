import classes from "./DateInput.module.css";

const DateFilter = (props) => {
  return (
    <div className={classes.container}>
      <input type="date" value={props.defaultVal} onChange={props.onChange}/>
    </div>
  );
};

export default DateFilter;
