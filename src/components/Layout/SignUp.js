import { useState } from "react";
import { useAuth } from "../../store/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import AuthenticationPage from "./AuthenticationPage";
import Header from "./Header";
import Alert from "../UI/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import authenticationClasses from "./AuthenticationPage.module.css";

const SignUp = () => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { signUp } = useAuth();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
          setErrorMsg("Fill in all fields")
          return false;
        }

        setIsSubmitting(true);

        try {
            await signUp(name, email, password);
            history.push("/");
        } catch (error) {
          setIsSubmitting(false);
          error.message ? setErrorMsg(error.message) : setErrorMsg("Error occured.");
        }
    };

    return (
        <AuthenticationPage>
            <Header>
                <h2>Sign Up</h2>
            </Header>
            <form onSubmit={handleSignUp} className={authenticationClasses.form}>
                <label htmlFor="name">
                    <div className={`${authenticationClasses["input-group"]} ${authenticationClasses["first-input"]}`}>
                        <div className={authenticationClasses["icon-group"]}>
                            <FontAwesomeIcon icon="id-badge" />
                        </div>
                        <div className={authenticationClasses["input-field-group"]}>
                            <div className={authenticationClasses["input-title"]}>
                              Name
                            </div>
                            <input
                              type="text"
                              value={name}
                              id="name"
                              onInput={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                </label>
                <label htmlFor="email">
                  <div className={`${authenticationClasses["input-group"]}`}>
                      <div className={authenticationClasses["icon-group"]}>
                          <FontAwesomeIcon icon="envelope" />
                      </div>
                      <div className={authenticationClasses["input-field-group"]}>
                          <div className={authenticationClasses["input-title"]}>
                            Email
                          </div>
                          <input
                            type="email"
                            value={email}
                            id="email"
                            onInput={(e) => setEmail(e.target.value)}
                          />
                      </div>
                  </div>
                </label>
                <label htmlFor="password">
                  <div className={`${authenticationClasses["input-group"]} ${authenticationClasses["last-input"]}`}>
                      <div className={authenticationClasses["icon-group"]}>
                          <FontAwesomeIcon icon="lock" />
                      </div>
                      <div className={authenticationClasses["input-field-group"]}>
                          <div className={authenticationClasses["input-title"]}>
                            Password
                          </div>
                          <input
                            type="password"
                            value={password}
                            id="password"
                            onInput={(e) => setPassword(e.target.value)}
                          />
                      </div>
                  </div>
                </label>
                
                <button className={authenticationClasses['submit-btn']}>
                  {isSubmitting ? (<FontAwesomeIcon icon="spinner" spin />) : ("Sign Up")}
                </button>
            </form>
            <Link to="/login" className={authenticationClasses.link}>
              Login
            </Link>
            {errorMsg && <Alert type="error">{errorMsg}</Alert>}
        </AuthenticationPage>
    );
};

export default SignUp;
