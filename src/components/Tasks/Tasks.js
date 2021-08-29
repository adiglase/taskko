import TaskItem from "./TaskItem/TaskItem";
import classes from "./Tasks.module.css";
import { useEffect, useState } from "react";
import { database } from "../../firebase/firebase";

const Tasks = (props) => {
	const [tasks, setTasks] = useState([])

	const getFullTime = (date, isDateOnly = false) => {
		const dateString =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);
		const timeString = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

		return isDateOnly ? dateString : `${dateString} ${timeString}`
	}
	
	useEffect(() => {
		const dateFilter = props.dateFilter ? props.dateFilter : getFullTime(new Date(), true);
		const dateFromFilter = new Date(dateFilter + " 00:00:00");
		const dateToFilter = new Date(dateFilter + " 23:59:59")

		database.getTasks.where("timeFrom", ">=", dateFromFilter).where("timeFrom", "<=", dateToFilter).orderBy("timeFrom", "desc").onSnapshot(snapshot => {
			const taskList = snapshot.docs.map((doc) => {
				const formattedTimeFrom = doc.data().timeFrom ? getFullTime(new Date(doc.data().timeFrom.toDate())) : "";
				const formattedDateFrom = doc.data().timeFrom ? getFullTime(new Date(doc.data().timeFrom.toDate()), true) : "";
				const formattedTimeTo = doc.data().timeTo ? getFullTime(new Date(doc.data().timeTo.toDate())) : "";

				return { id: doc.id, dateFrom: formattedDateFrom, formattedTimeFrom: formattedTimeFrom, formattedTimeTo: formattedTimeTo, ...doc.data() }
			})
			setTasks(taskList);
		})
	}, [props.dateFilter])

	const filteredTask = tasks.filter(function(task){
		task = task.name.toLowerCase();
		
		return task.indexOf(props.searchFilter) > -1; 
	});
	const taskList = filteredTask.map((task) => {
		return (
      <TaskItem
        key={task.id}
				id={task.id}
        title={task.name}
        priority={task.priority}
        state={task.state}
        timeFrom={task.formattedTimeFrom}
        timeTo={task.formattedTimeTo}
      />
    );
  });
  return <div className={classes.tasks}>{ tasks && taskList }</div>;
};

export default Tasks;
