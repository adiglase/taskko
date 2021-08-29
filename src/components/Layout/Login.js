import { useEffect, useRef, useState } from "react";
import AuthenticationPage from "./AuthenticationPage";
import { useAuth } from "../../store/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "../UI/Alert";

import authenticationClasses from "./AuthenticationPage.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();

    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await login(email, password);
            history.push("/");
        } catch (error) {
            setIsSubmitting(false);
            error.message
                ? setErrorMsg(error.message)
                : setErrorMsg("Error occured.");
        }
    };

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <AuthenticationPage>
            <Header>
                <h2>Welcome Back</h2>
            </Header>
            <div className={authenticationClasses.description}>
                Please input your personal login information. You can use
                demo@mail.com:demo123 for testing purpose.
            </div>
            <form onSubmit={handleLogin} className={authenticationClasses.form}>
                <label htmlFor="email">
                    <div className={`${authenticationClasses["input-group"]} ${authenticationClasses["first-input"]}`}>
                        <div className={authenticationClasses["icon-group"]}>
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className={authenticationClasses["input-field-group"]}>
                            <div className={authenticationClasses["input-title"]}>
                                Email address
                            </div>
                            <input
                                type="email"
                                id="email"
                                ref={emailRef}
                                value={email}
                                onInput={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </label>
                <label htmlFor="password">
                    <div
                        className={`${authenticationClasses["input-group"]} ${authenticationClasses["last-input"]}`}
                    >
                        <div className={authenticationClasses["icon-group"]}>
                            <FontAwesomeIcon icon="lock" />
                        </div>
                        <div className={authenticationClasses["input-field-group"]}>
                            <div className={authenticationClasses["input-title"]}>
                                Password
                            </div>
                            <input
                                type="password"
                                id="password"
                                ref={passwordRef}
                                value={password}
                                onInput={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </label>

                <button type="submit" className={authenticationClasses["submit-btn"]}>
                    {isSubmitting ? (
                        <FontAwesomeIcon icon="spinner" spin />
                    ) : (
                        "Login"
                    )}
                </button>

                <Link className={authenticationClasses.link} to="/sign-up">
                    Register
                </Link>

                {errorMsg && <Alert type="error">{errorMsg}</Alert>}
            </form>
        </AuthenticationPage>
    );
};

export default Login;
