import classes from "./AuthenticationPage.module.css";
import Main from "./Main";
import BackgroundAssets from "../../assets/Background";
import Header from "./Header";


const AuthenticationPage = (props) => {
    return (
        <div className={classes["authentication-page"]}>
            <Main>
                <Header>
                    <div className={classes["mobile-header"]}>
                        <h1>Taskko</h1>
                    </div>
                </Header>
                <div className={classes['authentication-form']}>
                    <div className={classes["image-background"]}>
                        <img
                            src={BackgroundAssets.taskDoneBackground}
                            alt="task management done"
                            className={classes["bg-image"]}
                        />
                    </div>
                    <div className={classes["form-container"]}>
                      {props.children}
                    </div>
                </div>
            </Main>
        </div>
    );
};

export default AuthenticationPage;
