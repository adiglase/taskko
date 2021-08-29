import { useEffect, useState } from "react";
import classes from "./Search.module.css";

const TaskSearch = (props) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    props.onInput(searchInput);
  }, [props, searchInput])

  return (
    <div className={classes.container}>
      <input type="text" placeholder="Search" onInput={(e) => setSearchInput(e.target.value)} value={searchInput} />
    </div>
  );
};

export default TaskSearch;
