import { useState } from "react";
import styles from "./login.module.scss";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Actions/login";
import Signup from "../signup/index";

const Login = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  console.log("user", userData);

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [modal, openModal] = useState(false);

  const userInfoHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const userInfoOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(userInfo));
    props.history.push("/home");
  };

  const navigateToSignup = () => {
    return openModal(true);
  };

  return (
    <div className={styles.mainConatiner}>
      {modal && <Signup />}
      <section>
        <div className={styles.logoContainer}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fblogo"
          />
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div className={styles.signInContainer}>
          <div className={styles.inputContainer}>
            <input
              name="username"
              value={userInfo.username}
              placeholder="Email address or phone number"
              onChange={(e) => userInfoHandler(e)}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <input
              name="password"
              value={userInfo.password}
              placeholder="Password"
              onChange={(e) => userInfoHandler(e)}
            ></input>
          </div>

          <button className={styles.loginBtn} onClick={userInfoOnSubmit}>
            Log In
          </button>
          <div className={styles.forgetPassword}>
            <Link to="/about">Forget password</Link>
          </div>
          <hr></hr>
          <button
            onClick={navigateToSignup}
            className={styles.createNewAccount}
          >
            Create New Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
