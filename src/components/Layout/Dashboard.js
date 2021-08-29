import classes from "./Dashboard.module.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import NewTask from "../Tasks/NewTask/NewTask";
import MobileSidebar from "../Layout/MobileSidebar";
import Header from "../Layout/Header";
import HamburgerButton from "../UI/HamburgerButton";
import Button from "../UI/Button";
import DateInput from "../UI/DateInput";
import Search from "../UI/Search";
import Tasks from "../Tasks/Tasks";
import { useAuth } from "../../store/AuthContext";
import { useHistory } from "react-router";

import { useState, useEffect } from "react";

const Dashboard = () => {
  const { logout } = useAuth();
  const history = useHistory();

  const [isShowNewTask, setIsShowNewTask] = useState(false);
  const [isShowMobileSidebar, setIsShowMobileSidebar] = useState(false);
  const [dateFilter, setDateFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const handleResize = () => {
    const { innerWidth: width } = window;

    if (width > 1000) {
      setIsShowMobileSidebar(false);
    }
  };

  const getTodayDate = () => {
    const date = new Date();
    const dateString =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);

    return dateString;
  };

  const handleChangeDate = (e) => {
    setDateFilter(e.target.value);
  };

  const handleSearchInput = (input) => {
    setSearchFilter(input);
  }

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    setDateFilter(getTodayDate());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isShowNewTask && <NewTask onClose={() => setIsShowNewTask(false)} />}
      <Sidebar onLogout={handleLogout}/>
      {isShowMobileSidebar && (
        <MobileSidebar onClose={() => setIsShowMobileSidebar(false)} onLogout={handleLogout}/>
      )}
      <Main>
        <Header>
          <div className={classes["mobile-header"]}>
            <HamburgerButton onClick={() => setIsShowMobileSidebar(true)} />
            <h1>Taskko</h1>
          </div>

          <h3>Filter</h3>
        </Header>
        <div className={classes["tasks-action-container"]}>
          <DateInput
            defaultVal={dateFilter}
            onChange={(e) => handleChangeDate(e)}
          />
          <Search onInput={handleSearchInput}/>
          <Button
            onBtnClick={() => {
              setDateFilter(getTodayDate());
              setIsShowNewTask(true);
            }}
          >
            + New Task
          </Button>
        </div>
        <Tasks dateFilter={dateFilter} searchFilter={searchFilter}/>
      </Main>
    </>
  );
};

export default Dashboard;
